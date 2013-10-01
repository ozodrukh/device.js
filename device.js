var Device = function(){};

//get UserAgent
Device.prototype.userAgent = window.navigator.userAgent.toLowerCase();

// Device information
Device.prototype.deviceType = undefined;
Device.prototype.orientation = undefined;

// Types

Device.ANDROID = "android";
Device.IPHONE  = "iphone";
Device.WINDOWS = "windows";
Device.IPAD    = "ipad";

Device.TYPE_MOBILE = "mobile";
Device.TYPE_TABLET = "tablet";
Device.TYPE_NORMAL_SIZE = "computer_normal_size";

Device.prototype.screenSize = function(){
    var width = window.innerWidth;
    var height = window.innerHeight;

    return [width, height];
}

Device.prototype.getType = function(){
    this.isMobile();
    this.isNormal();
    this.isTablet();
    console.log(this.deviceType);
}

Device.prototype.findInAgent = function(type){
   return this.userAgent.indexOf(type) !== -1;
}

Device.prototype.isMobile = function(){
    var device = this;
    if(device.findInAgent(Device.ANDROID) || device.findInAgent(Device.IPHONE)){
        device.deviceType = Device.TYPE_MOBILE;
        return true;
    }
    return false;
}

Device.prototype.isTablet = function(){
    var device = this;
    if(device.findInAgent(Device.IPAD) || device.screenSize() ){
        device.deviceType = Device.TYPE_TABLET;
        return true;
    }
    return false;
}

Device.prototype.isNormal = function(){
    var device = this;
    if(device.findInAgent(Device.WINDOWS)){
        device.deviceType = Device.TYPE_NORMAL_SIZE;
        return true;
    }
    return false;
}
