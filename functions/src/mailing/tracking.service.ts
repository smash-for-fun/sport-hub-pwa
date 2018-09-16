export class TrackingService {
  image: Buffer;

  constructor() {
    this.image = new Buffer([
      0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00,
      0x80, 0x00, 0x00, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x2c,
      0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x02,
      0x02, 0x44, 0x01, 0x00, 0x3b
    ]);
  }

  trackPerson(req: any, res: any, next: any) {
    const emailId = req.param.id;

    res.set('Content-Type', 'image/png');
    res.end(this.image, 'binary');

    console.log('User opend mail', emailId);

    next();
    /*db.findOne({ id: emailId }, function(error, email) {
      if(error) return next(error);
      app.emit('event:opened', email);
    });*/
  }

}
