<!-- routify:options links={
    url:'#url',
    goto: '#goto',
    params: '#params',
    isActive: '#is-active'
} -->
<div class="c-container-horizontal--narrow">
  <div class="c-container-vertical--small">
    <h1 class="c-h1">Helpers</h1>
    <table class="c-table c-table--styled c-table--horizontal">
      <tr>
        <th>context</th>
        <td>Returns information about the current route</td>
      </tr>
      <tr>
        <th>ready</th>
        <td>If present, will delay SSR rendering until it has been called</td>
      </tr>
      <tr>
        <th>beforeUrlChange</th>
        <td>Hook</td>
      </tr>
      <tr>
        <th>url</th>
        <td>Resolves URLs by path or name</td>
      </tr>
      <tr>
        <th>params</th>
        <td>Returns parameters from the URL</td>
      </tr>
      <tr>
        <th>leftover</th>
        <td>Returns the unconsumed part of the URL</td>
      </tr>
      <tr>
        <th>goto</th>
        <td>Programatically navigate (resolves with the url helper)</td>
      </tr>
      <tr>
        <th>isActive</th>
        <td>Check if a given path is the currently active path.</td>
      </tr>
      <tr>
        <th>getConcestor</th>
        <td>
          Returns the concestor and sibling ancestors of two routes. (Used for
          determining transition direction)
        </td>
      </tr>
      <tr>
        <th>getDirection</th>
        <td>Returns index difference between two paths from an array.</td>
      </tr>
    </table>
  </div>
</div>
