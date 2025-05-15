
import { Elysia } from 'elysia';
import nodemailer from 'nodemailer';
const SMTP_user_name = '';
const SMTP_password = ''; 
const SMTP_endpoint = '';
const Port = 465;
const sendermail = "<no-reply@metaflowx.com>";

let transporter = nodemailer.createTransport({
    // host: SMTP_endpoint,
    // port: Port,
    // secure: true, // true for 465, false for other ports
    // auth: {
    //     user: SMTP_user_name,
    //     pass: SMTP_password
    // }
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,     
    auth: {
    user: 'malcolm32@ethereal.email',  
    pass: 'xQezwqQGtxjrScf7j4'  
    }
})



async function sendMail(data:any) {
    try {
        const { to, subject } = data;
        let info = {
            from: sendermail, 
            to: to,
            subject: subject,
            text: data.text ? data.text : '',
            html: data.html ? data.html : ''
        };
        transporter.sendMail(info, (function (error:any , data:any ) {
            if (error) {
                console.log("error occurs", error)
            } else {
                console.log("email sent", data)
            }
        }));
    } catch (error:any) {
        console.log("Error: from utils > mailer.js > sendMail: ", error.message);
    }
}


export async function sendOTP(to:any , otp:any) {
    const subject = "Metaflowx Account Varification Code";
    const logo_url = 'https://www.metaflowx.com/_next/static/media/logo.a0b05763.svg';
    const website_url = 'https://www.metaflowx.com/';
    const website_name = 'Metaflowx';
    const organisation_addr = '';
    const title = 'metaflowx.com';
    const html = await generateOtpHTML(otp, to, { logo: logo_url, website: website_url, name: website_name, address: organisation_addr, title });
    await sendMail({ to, subject, html });
}

async function generateOtpHTML(otp :any, to :any, info :any) {
        let html = `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
            <div style="margin:50px auto;width:70%;padding:20px 0">
                <div style="border-bottom:1px solid #eee">
                    <a href="${info && info.website ? info.website : '#'}" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600"><img src="${info && info.logo ? info.logo : ''}" style="max-height: 30px;" /></a>
                </div>
                <p style="font-size:1.1em">Hi,</p>
                <p>Thank you for choosing MetaflowX. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes</p>
                <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
                <p style="font-size:0.9em;">Regards,<br />MetaflowX</p>
                <hr style="border:none;border-top:1px solid #eee" />
                <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                    <p>${info && info.title ? info.title : ''}</p>
                    ${info && info.address ? info.address : ''}
                </div>
            </div>
        </div>`;
       
    return html;
}