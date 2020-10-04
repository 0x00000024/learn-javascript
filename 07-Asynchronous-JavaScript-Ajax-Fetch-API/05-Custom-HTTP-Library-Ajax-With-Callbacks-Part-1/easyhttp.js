function EasyHTTP() {
  this.http = new XMLHttpRequest();
}

EasyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  const self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  };

  this.http.send();
};
