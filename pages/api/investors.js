const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


export default (req , res) => {


  const body = JSON.parse(req.body);

  const msg = {
      to: 'help@groshure.com.au',
      from: 'help@groshure.com.au', 
      subject: "Groshure's Investors",
      text: 'and easy to do anywhere, even with Node.js',
      html: `<!DOCTYPE html">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
      </head>
      
      <body>
        <div style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div style="padding-left:5px; padding-right:5px; color:white;">
                <h3>New form submission on Investor</h3><b>
                <p>someone just submitted a form on Groshure. Here's what they had to say</p><br/><br/>
                <div>
                  <p>Store Name</p>
                  <p style="font-weight:bolder;">${body.storename}</p>
                </div>
                <br/>
                <br/>
                <div>
                  <p>Email</p>
                  <p style="font-weight:bolder;">${body.email}</p>
                </div>
                <br/>
                <br/>
                <div>
                  <p>Phone Number</p>
                  <p style="font-weight:bolder;">${body.phoneNumber}</p>
                </div>
                <br/>
                <br/>
                <div>
                  <p>Addition Info</p>
                  <p style="font-weight:bolder;">${body.additionInfo}</p>
                </div>
                <br/>
                <br/>
              </div>
      </body>
      </html>`,
    };
      sgMail
  .send(msg).then(() => {console.log("status Ok 200")}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });

      res.status(200).json({ status: "ok" })

}