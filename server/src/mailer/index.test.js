describe('sendEmail', () => {
    it('should send an email', async () => {
      const mockTransporter = {
        sendMail: jest.fn(() => Promise.resolve())
      };
      nodemailer.createTransport = jest.fn().mockReturnValue(mockTransporter);
  
      const from = 'test@example.com';
      const to = 'recipient@example.com';
      const subject = 'Test email';
      const message = 'This is a test email';
  
      await sendEmail(from, to, subject, message);
  
      expect(nodemailer.createTransport).toHaveBeenCalledWith({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: 'yourgmailusername',
          pass: 'yourgmailpassword'
        }
      });
      expect(mockTransporter.sendMail).toHaveBeenCalledWith({
        from: from,
        to: to,
        subject: subject,
        text: message
      });
    });
  });