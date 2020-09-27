# Restore Tabs

You can `restore` tabs after refreshing the page or logging in from another computer by using the `restore` property.

RouterTab uses sessionStorage to store the cache information of the tabs

<doc-links api="#restore" demo="/restore/" />

**Default mode**

```html
<router-tab restore />
```

**Custom cache**

RouterTab supports customizing the locally stored key, and obtains the corresponding cache according to the given key

In practical applications, we want to store browser tab information based on the current user.

```html
<router-tab :restore="userInfo.userId" />
```

**Listen to restore parameters**

Usually, our data will be obtained asynchronously from the server. If we want to restore the user's tabs after the user data is obtained, we can configure `restore-watch` to monitor the restore parameters and automatically restore the corresponding user's tabs after changes.

```html
<router-tab :restore="userInfo.userId" restore-watch />
```
