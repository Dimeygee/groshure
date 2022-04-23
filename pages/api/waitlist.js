const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


export default (req , res) => {

  const body = JSON.parse(req.body);


    const msg = {
        to: 'help@groshure.com.au',
        from: 'help@groshure.com.au', 
        subject: "Groshure's waitlist",
        text: `${body.waitlist}`,
        html: `<!DOCTYPE html">
        <html lang="en">
        <head>
          <meta charset="utf-8">
        
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        
        </head>
        
        <body>
          <div style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
                </div>
                <div class="container" style="margin-left: 20px;margin-right: 20px;">
                  <h3>New form submission on Groshure</h3><b>
                  <p>${body.waitlist} joined groshure's waitlist</p>
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

      res.status(200).json({ body: body })

}