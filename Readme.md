
# notificationCall

  ajax call for notification summaries.

## Installation

    $ component install fs-components/alertserviceCaller

## Example
```js

  var userId = 'cis.something',
  authToken = 'authToken';
  require('notificationCall')(userId, authToken, function(err, alertserviceSummary){
    console.log(alertserviceSummary);
  });

```
## API

### require('notificationCall')(userId, authToken, callback);

  Params:
  - userId (string): cis.user.id
  - authToken (string): sessionId
  - callback (function): callback function after ajax call finishes.
    - callback params (error, alertserviceSummary)
   

## License

  MIT
