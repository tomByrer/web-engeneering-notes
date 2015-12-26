## Test Scenarios

### Low Bandwidth

* [Developing for Billions (Chrome Dev Summit 2015)](https://youtu.be/9jmqsq2OQjc?list=PLNYkxOF6rcICcHeQY02XLvoGL34rZFWZn&t=797)
  + Google-Chrome [Data Saver](https://support.google.com/chrome/answer/2392284?hl=en)
    - proxy service compresses up to 60%
    - on for 10% globally (2015-11)
    - might turn off geolocation (?)
    - possible fuzzy images
    - intranet sites might not load.
    - bill authentication
    - Local settings will be ignored if you manually modified your `/etc/hosts` file.
    - ideas:
      * load only critical images
      * lower resolution of media
      * turn off auto-play

  + [host server `OptimizeForBandwidth`](https://developers.google.com/speed/pagespeed/module/optimize-for-bandwidth)
  + [image sizing with HTTP Client Hints: DPR, Width, Viewport-Width](https://www.chromestatus.com/feature/5504430086553600)
  
