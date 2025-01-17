---
title: Analyze Github Events on TiDB Cloud in 10 minutes
---

Analyzing Github events is easy and interesting, here to show you how to analyze a sample data with TiDB Cloud in 10 minutes.

In this tutorials, we will provide the full GitHub events data on 2022-01-01(about 2 million rows), with this data, you can know anything that happend on 2022-01-01, :)


## 1. Signup TiDB Cloud to create a cluster (Free)

We need a database to store data.

:::info
a cluster is a database
:::

### Signup

First, you can signup a free TiDB Cloud account via this link:

> _**https://tidbcloud.com/signup**_

### Create cluster

Once registered, you can create a free cluster with `Developer Tier`:

:::caution
Only Developer Tier is **free** for 1 year.
:::

![](/img/try-it-yourself/dev-tier.png)


Input the cluster name and password:

:::note
Remember your **database password** of your cluster, it will be used later.
:::

![](/img/try-it-yourself/create-cluster.png)

## 2. Import data to your TiDB Cloud cluster

### Import data

Once your cluster is ready, we begin to import 2022-01-01's Github events data to your cluster.

:::info
Yes, for convenience, we merge the `create database/table` in the data sql files, you don't need to create database/tables by yourself.

If you want to know the table schema, you can `desc gharchive_dev` after this step.
:::

TiDB Cloud support importing data from UI console, like this:

![](/img/try-it-yourself/import.png)


In the **new** page, copy the following values into forms:

Bucket URL:
```
s3://tidbcloud-samples/gharchive/
```
Role-ARN:
```
arn:aws:iam::385595570414:role/import-sample-access
```
Bucket Region: US West(Oregon)

Data Format: TiDB Dumpling

Password: <your cluster password\>

![](/img/try-it-yourself/fill.png)

then, click `Import`, then wait for complete.


```


(about 5 minutes ......)


```

### Use web shell to check if data is ready
TiDB Cloud provide a web shell to connect database online!

Just click `Connect` button --> `Web SQL Shell` tab --> `Open SQL Shell` -->  input your cluster password like this:

![](/img/try-it-yourself/web-shell.png)


### (Optional) Set column storage replica: TiFlash

TiFlash is the key component that makes TiDB essentially an Hybrid Transactional/Analytical Processing (HTAP) database, if you want to learn more about HTAP in TiDB, please read [TiFlash Overview](https://docs.pingcap.com/tidb/stable/tiflash-overview).

Whatever, you only need to know we will get On-Line Analytical Processing ability by simply executing the follow sqls without any other efforts:

```sql
use gharchive_dev;
ALTER TABLE github_events SET TIFLASH REPLICA 1;
ALTER TABLE db_repos SET TIFLASH REPLICA 1;
```

Set tiflash replica will take some time, you can use the following sql to check if the procedure's done:
```sql
SELECT * FROM information_schema.tiflash_replica WHERE TABLE_SCHEMA = 'gharchive_dev' and TABLE_NAME = 'github_events';
```

here is an example shows that the `PROGRESS` means the procedure is done:

```sql
mysql> SELECT * FROM information_schema.tiflash_replica WHERE TABLE_SCHEMA = 'gharchive_dev' and TABLE_NAME = 'github_events';
+---------------+---------------+----------+---------------+-----------------+-----------+----------+
| TABLE_SCHEMA  | TABLE_NAME    | TABLE_ID | REPLICA_COUNT | LOCATION_LABELS | AVAILABLE | PROGRESS |
+---------------+---------------+----------+---------------+-----------------+-----------+----------+
| gharchive_dev | github_events |       68 |             1 |                 |         1 |        1 |
+---------------+---------------+----------+---------------+-----------------+-----------+----------+
1 row in set (0.27 sec)

mysql>
```


## 3. Analysis!

Now, everything is ready, let's go!

:::tip
if you want to know the table schema, you can go to:xxxx

or you can also use `show create table tbl_name` to get that info.
:::


### How many events in total on 2022-01-01?
```sql
SELECT count(*) FROM github_events
```

### Which repo get the most stars on the first day?

```sql
  SELECT repo_name, count(*) AS events_count
    FROM github_events
   WHERE type = 'WatchEvent' /* Yes, `WatchEvent` means star */
GROUP BY 1
ORDER BY 2 DESC
   LIMIT 20;
```

### Who is the most active user that day (exclude bots)

```sql
  SELECT actor_login, 
         count(*) AS events_count
    FROM github_events
   WHERE actor_login NOT LIKE '%bot%'
GROUP BY 1
ORDER BY 2 DESC 
   LIMIT 20
```


## 4. Quiz

### Q: which database get the most star on 2022-01-01?

:::tip
We collect all oss databases repositories (hosted on Github) from https://db-engines.com, and store them in table: `db_repos`.
:::

### A: ⬇️

<details><summary>Click me to show answer</summary>
<p>

Schema:
```sql
mysql> desc db_repos;
+-------+--------------+------+------+---------+-------+
| Field | Type         | Null | Key  | Default | Extra |
+-------+--------------+------+------+---------+-------+
| id    | varchar(255) | NO   | PRI  | NULL    |       |
| name  | varchar(255) | YES  |      | NULL    |       |
+-------+--------------+------+------+---------+-------+
2 rows in set (0.34 sec)

mysql>
```

SQL:
```sql
  SELECT repo_name, count(*) AS events_count
    FROM github_events
         JOIN db_repos ON db_repos.id = github_events.repo_id
   WHERE type = 'WatchEvent'
GROUP BY 1
ORDER BY 2 DESC
   LIMIT 20;
```

</p>
</details>
