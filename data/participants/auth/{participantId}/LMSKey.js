'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /participants/auth/{participantId}/LMSKey
 */
module.exports = {
    /**
     * summary: Get encrypted LMS logon key by participantId
     * description: This endpoint returns the encrypted logon key for the LMS given the participantId. Example psuedo code for creating the link:
```
GetTopClassLoginURL(int PID)
  string login_url = &#34;&#34;;
    using (WebClient client = new WebClient())
      string url = &#34;$API_HOST$/participants/&#39; + PID.ToString() + &#39;/auth/LMSKey&#34;);
      login_url = @&#34;http://54.89.109.25/topclass/login.do?uid=&#34; + client.DownloadString(url);
      login_url = login_url.Replace(&#34;\&#34;&#34;, string.Empty);
  return login_url;
```

     * parameters: participantId
     * produces: application/json
     * responses: 200, default
     * operationId: getLMSKey
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/auth/{participantId}/LMSKey',
                operation: 'get',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/participants/auth/{participantId}/LMSKey',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
