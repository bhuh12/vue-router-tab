<template>
  <table class="route-info">
    <tr>
      <th width="80">name</th>
      <td>{{$route.name}}</td>
    </tr>
    <tr>
      <th>path</th>
      <td>{{$route.path}}</td>
    </tr>
    <tr>
      <th>params</th>
      <td>{{$route.params}}</td>
    </tr>
    <tr>
      <th>query</th>
      <td>{{$route.query}}</td>
    </tr>
    <tr>
      <th>hash</th>
      <td>{{$route.hash}}</td>
    </tr>
    <tr>
      <th>fullPath</th>
      <td>{{$route.fullPath}}</td>
    </tr>
  </table>
</template>

<style lang="scss" scoped>
.route-info {
  min-width: 300px;
  border-collapse: collapse;

  th, td {
    padding: 5px 8px;
    border: 1px solid #ddd;
  }

  th {
    text-align: left;
    font-weight: 400;
    background-color: #f7f7f7;
  }
}
</style>
