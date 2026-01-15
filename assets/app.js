var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}} //
// Animation method
// source: https://github.com/daneden/animate.css
//

$.fn.extend({
  animateCss: function animateCss(animationName, callback) {
    var animationEnd = function (el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd' };


      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    }(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function () {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  } });


//
// Wingie Animation System
//
var WingieAnimations = {
  // Motivational messages for each category
  messages: {
    flight: [
      { emoji: '✈️', title: 'Uçuşa Hazır!', text: 'Bu branch ile göklere çıkacaksın!' },
      { emoji: '🛫', title: 'Kalkış Zamanı!', text: 'Harika bir iş çıkaracaksın!' },
      { emoji: '🌍', title: 'Dünyayı Keşfet!', text: 'Bu kod seni uzaklara götürecek!' },
      { emoji: '🚀', title: 'Roket Gibi!', text: 'Bu branch ile hız kazanacaksın!' },
      { emoji: '☁️', title: 'Bulutların Üstünde!', text: 'Başarı seni bekliyor!' }
    ],
    car: [
      { emoji: '🚗', title: 'Yola Çık!', text: 'Bu branch ile hedefe ulaşacaksın!' },
      { emoji: '🏎️', title: 'Tam Gaz!', text: 'Hızlı ve güvenli kodlama!' },
      { emoji: '🛣️', title: 'Yol Seninle!', text: 'Her kilometre bir başarı!' },
      { emoji: '🚙', title: 'Macera Başlıyor!', text: 'Kodlama yolculuğuna hazır mısın?' },
      { emoji: '⛽', title: 'Depo Full!', text: 'Enerjin tam, yola devam!' }
    ],
    hotel: [
      { emoji: '🏨', title: 'Konfor Zamanı!', text: 'Bu branch ile rahat çalışacaksın!' },
      { emoji: '🌟', title: '5 Yıldızlı Kod!', text: 'Kaliteli iş çıkaracaksın!' },
      { emoji: '🛏️', title: 'Rahat Ol!', text: 'Her şey kontrol altında!' },
      { emoji: '🌙', title: 'Huzurlu Geceler!', text: 'Bu branch ile uyku kaçırmayacaksın!' },
      { emoji: '🏰', title: 'Saray Gibi!', text: 'Muhteşem bir iş çıkaracaksın!' }
    ],
    general: [
      { emoji: '💪', title: 'Harika Gidiyorsun!', text: 'Wingie seninle gurur duyuyor!' },
      { emoji: '🎯', title: 'Hedefe Kilitlen!', text: 'Bu branch ile başaracaksın!' },
      { emoji: '⭐', title: 'Yıldız Gibi!', text: 'Parlayan bir geliştiricisin!' },
      { emoji: '🔥', title: 'Ateş Gibi!', text: 'Durdurulamaz bir güçsün!' },
      { emoji: '🎉', title: 'Kutlama Zamanı!', text: 'Yeni bir branch, yeni bir başarı!' }
    ]
  },

  // Get animation container
  getContainer: function() {
    var container = document.querySelector('.animation-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'animation-container';
      document.body.appendChild(container);
    }
    return container;
  },

  // Clear container
  clearContainer: function() {
    var container = this.getContainer();
    container.innerHTML = '';
  },

  // Show motivational message
  showMessage: function(category) {
    var messages = this.messages[category] || this.messages.general;
    var msg = messages[Math.floor(Math.random() * messages.length)];
    
    var messageEl = document.createElement('div');
    messageEl.className = 'motivation-message';
    messageEl.innerHTML = '<span class="emoji">' + msg.emoji + '</span>' + 
                          '<strong>' + msg.title + '</strong>' +
                          '<span class="text">' + msg.text + '</span>';
    
    document.body.appendChild(messageEl);
    
    setTimeout(function() {
      if (messageEl.parentNode) {
        messageEl.parentNode.removeChild(messageEl);
      }
    }, 3500);
  },

  // Create confetti
  createConfetti: function(count) {
    var container = this.getContainer();
    var colors = ['#2dc44c', '#4486fb', '#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff'];
    
    for (var i = 0; i < count; i++) {
      var confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.top = '-20px';
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = (Math.random() * 2) + 's';
      confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
      confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      confetti.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
      container.appendChild(confetti);
    }
  },

  // Flight animation (for PI, FLY keywords)
  playFlightAnimation: function() {
    var self = this;
    this.clearContainer();
    var container = this.getContainer();
    
    // Add clouds
    for (var i = 0; i < 5; i++) {
      var cloud = document.createElement('div');
      cloud.className = 'cloud';
      cloud.innerHTML = '☁️';
      cloud.style.top = (10 + Math.random() * 40) + '%';
      cloud.style.animationDelay = (i * 0.5) + 's';
      container.appendChild(cloud);
    }
    
    // Add plane
    setTimeout(function() {
      var plane = document.createElement('div');
      plane.className = 'flying-plane';
      plane.innerHTML = '✈️';
      container.appendChild(plane);
      
      // Add trail effect
      var trailInterval = setInterval(function() {
        var trail = document.createElement('div');
        trail.className = 'plane-trail';
        trail.style.left = (Math.random() * 60 + 20) + 'vw';
        trail.style.top = (Math.random() * 40 + 20) + '%';
        container.appendChild(trail);
      }, 100);
      
      setTimeout(function() {
        clearInterval(trailInterval);
      }, 2500);
    }, 500);
    
    // Add confetti
    this.createConfetti(30);
    
    // Show message
    setTimeout(function() {
      self.showMessage('flight');
    }, 800);
    
    // Cleanup
    setTimeout(function() {
      self.clearContainer();
    }, 4000);
  },

  // Car animation (for CAR keyword)
  playCarAnimation: function() {
    var self = this;
    this.clearContainer();
    var container = this.getContainer();
    
    // Add road
    var road = document.createElement('div');
    road.className = 'road';
    container.appendChild(road);
    
    // Add car
    setTimeout(function() {
      var car = document.createElement('div');
      car.className = 'driving-car';
      car.innerHTML = '🚗';
      container.appendChild(car);
      
      // Add dust particles
      var dustInterval = setInterval(function() {
        var dust = document.createElement('div');
        dust.className = 'confetti';
        dust.style.left = (Math.random() * 30) + 'vw';
        dust.style.bottom = '18%';
        dust.style.background = '#d4a574';
        dust.style.width = '8px';
        dust.style.height = '8px';
        dust.style.animationDuration = '1s';
        container.appendChild(dust);
      }, 150);
      
      setTimeout(function() {
        clearInterval(dustInterval);
      }, 2000);
    }, 300);
    
    // Add confetti
    this.createConfetti(25);
    
    // Show message
    setTimeout(function() {
      self.showMessage('car');
    }, 600);
    
    // Cleanup
    setTimeout(function() {
      self.clearContainer();
    }, 3500);
  },

  // Hotel animation (for HOT keyword)
  playHotelAnimation: function() {
    var self = this;
    this.clearContainer();
    var container = this.getContainer();
    
    // Add stars
    for (var i = 0; i < 15; i++) {
      var star = document.createElement('div');
      star.className = 'star';
      star.innerHTML = '⭐';
      star.style.left = (Math.random() * 100) + 'vw';
      star.style.top = (Math.random() * 50) + '%';
      star.style.animationDelay = (Math.random() * 1) + 's';
      container.appendChild(star);
    }
    
    // Add hotel icon
    setTimeout(function() {
      var hotel = document.createElement('div');
      hotel.className = 'hotel-icon';
      hotel.innerHTML = '🏨';
      hotel.style.left = '50%';
      hotel.style.top = '40%';
      hotel.style.transform = 'translate(-50%, -50%)';
      container.appendChild(hotel);
    }, 300);
    
    // Add sparkles
    setTimeout(function() {
      for (var i = 0; i < 8; i++) {
        var sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = '✨';
        sparkle.style.left = (30 + Math.random() * 40) + 'vw';
        sparkle.style.top = (30 + Math.random() * 30) + '%';
        sparkle.style.animationDelay = (i * 0.15) + 's';
        container.appendChild(sparkle);
      }
    }, 500);
    
    // Add confetti
    this.createConfetti(20);
    
    // Show message
    setTimeout(function() {
      self.showMessage('hotel');
    }, 700);
    
    // Cleanup
    setTimeout(function() {
      self.clearContainer();
    }, 3500);
  },

  // Payment animation
  playPaymentAnimation: function() {
    var self = this;
    this.clearContainer();
    var container = this.getContainer();
    
    // Flying money and cards
    var paymentEmojis = ['💳', '💰', '💵', '🪙', '💎', '🏦'];
    for (var i = 0; i < 12; i++) {
      var payment = document.createElement('div');
      payment.className = 'floating-emoji';
      payment.innerHTML = paymentEmojis[Math.floor(Math.random() * paymentEmojis.length)];
      payment.style.left = (Math.random() * 100) + 'vw';
      payment.style.animationDelay = (Math.random() * 1.5) + 's';
      container.appendChild(payment);
    }
    
    // Add sparkles
    setTimeout(function() {
      for (var i = 0; i < 10; i++) {
        var sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = '✨';
        sparkle.style.left = (20 + Math.random() * 60) + 'vw';
        sparkle.style.top = (20 + Math.random() * 60) + '%';
        sparkle.style.animationDelay = (i * 0.12) + 's';
        container.appendChild(sparkle);
      }
    }, 300);
    
    this.createConfetti(25);
    
    setTimeout(function() {
      self.showMessage('general');
    }, 600);
    
    setTimeout(function() {
      self.clearContainer();
    }, 3500);
  },

  // General Wingie animation - Mixed travel theme
  playGeneralAnimation: function() {
    var self = this;
    this.clearContainer();
    var container = this.getContainer();
    
    // Random selection of animations
    var animations = ['mixed', 'travel', 'celebration', 'payment'];
    var selectedAnim = animations[Math.floor(Math.random() * animations.length)];
    
    if (selectedAnim === 'mixed') {
      // Mixed travel icons floating up
      var travelEmojis = ['✈️', '🚗', '🏨', '🌴', '🗺️', '🧳', '🎫', '🌍', '⛱️', '🚀'];
      for (var i = 0; i < 15; i++) {
        var emoji = document.createElement('div');
        emoji.className = 'floating-emoji';
        emoji.innerHTML = travelEmojis[Math.floor(Math.random() * travelEmojis.length)];
        emoji.style.left = (Math.random() * 100) + 'vw';
        emoji.style.animationDelay = (Math.random() * 2) + 's';
        container.appendChild(emoji);
      }
    } else if (selectedAnim === 'travel') {
      // Plane flying with trail
      var plane = document.createElement('div');
      plane.className = 'flying-plane';
      plane.innerHTML = '✈️';
      container.appendChild(plane);
      
      // Car driving
      setTimeout(function() {
        var car = document.createElement('div');
        car.className = 'driving-car';
        car.innerHTML = '🚗';
        container.appendChild(car);
      }, 500);
      
      // Hotel popping
      setTimeout(function() {
        var hotel = document.createElement('div');
        hotel.className = 'hotel-icon';
        hotel.innerHTML = '🏨';
        hotel.style.left = '50%';
        hotel.style.top = '35%';
        hotel.style.transform = 'translate(-50%, -50%)';
        container.appendChild(hotel);
      }, 800);
    } else if (selectedAnim === 'celebration') {
      // Celebration with fireworks effect
      var celebrationEmojis = ['🎉', '🎊', '🥳', '🎈', '🎁', '🏆', '🌟', '💫'];
      for (var i = 0; i < 12; i++) {
        var emoji = document.createElement('div');
        emoji.className = 'firework-emoji';
        emoji.innerHTML = celebrationEmojis[Math.floor(Math.random() * celebrationEmojis.length)];
        emoji.style.left = (20 + Math.random() * 60) + 'vw';
        emoji.style.top = (20 + Math.random() * 60) + '%';
        emoji.style.animationDelay = (i * 0.15) + 's';
        container.appendChild(emoji);
      }
    } else {
      // Payment theme
      var paymentEmojis = ['💳', '💰', '💵', '🪙', '💎', '✅', '🎯'];
      for (var i = 0; i < 10; i++) {
        var emoji = document.createElement('div');
        emoji.className = 'floating-emoji';
        emoji.innerHTML = paymentEmojis[Math.floor(Math.random() * paymentEmojis.length)];
        emoji.style.left = (Math.random() * 100) + 'vw';
        emoji.style.animationDelay = (Math.random() * 1.5) + 's';
        container.appendChild(emoji);
      }
    }
    
    // Add sparkles around
    setTimeout(function() {
      for (var i = 0; i < 15; i++) {
        var sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = ['✨', '🌟', '💫', '⭐'][Math.floor(Math.random() * 4)];
        sparkle.style.left = (10 + Math.random() * 80) + 'vw';
        sparkle.style.top = (10 + Math.random() * 80) + '%';
        sparkle.style.animationDelay = (i * 0.08) + 's';
        container.appendChild(sparkle);
      }
    }, 300);
    
    // Add confetti
    this.createConfetti(40);
    
    // Show message
    setTimeout(function() {
      self.showMessage('general');
    }, 500);
    
    // Cleanup
    setTimeout(function() {
      self.clearContainer();
    }, 4000);
  },

  // Detect branch type and play appropriate animation
  playAnimationForBranch: function(branchName) {
    var name = branchName.toLowerCase();
    
    if (name.includes('car')) {
      this.playCarAnimation();
    } else if (name.includes('pi') || name.includes('fly') || name.includes('flight')) {
      this.playFlightAnimation();
    } else if (name.includes('hot') || name.includes('hotel')) {
      this.playHotelAnimation();
    } else {
      this.playGeneralAnimation();
    }
  }
};


//
// BranchNameGenerator module
//
//
var
BranchNameGenerator = function () {

  function BranchNameGenerator(element, options) {_classCallCheck(this, BranchNameGenerator);
    this.$element = element;
    this.options = $.extend(true, {}, BranchNameGenerator.defaults, this.$element.data(), options);

    this._init();
  }

  /**
     * Initialize the plugin
     * @private
     */_createClass(BranchNameGenerator, [{ key: '_init', value: function _init()
    {
      this.$inputs = this.$element.find('input, textarea, select');
      this.$outputArea = this.$element.find('[data-output-area]');
      this.$form = this.$element.find('[data-form]');
      this.willAnimate = true;

      this._bindEvents();
      this._renderOutputText();
    }

    /**
       * Initialize events for the plugin
       * @private
       */ }, { key: '_bindEvents', value: function _bindEvents()
    {var _this = this;

      if (this.options.validateOn === 'fieldChange') {
        this.$inputs.
        off('change').
        on('change', function (e) {
          _this._renderOutputText();

          if (_this.willAnimate) {
            var isValid = _this.checkFormValidity();

            if (isValid) {
              _this.applyFormCompletionAnimation();
              _this.willAnimate = false;
            }
          }
        });
      }

      if (this.options.liveValidate) {
        this.$inputs.
        off('input').
        on('input', function (e) {
          _this._renderOutputText();
        });
      }

      if (this.options.validateOnBlur) {
        this.$inputs.
        off('blur').
        on('blur', function (e) {
          _this._renderOutputText();
        });
      }

      this.$outputArea.
      on('click', function (e) {
        var branchName = _this.$outputArea.text();
        _this._copyToClipBoard();
        _this._renderCopySuccessMsg();
        
        // Play Wingie animation based on branch name
        WingieAnimations.playAnimationForBranch(branchName);
      });
    }

    /**
       * Process data from form
       * @private
       */ }, { key: '_processData', value: function _processData()
    {
      var data = JSON.parse(JSON.stringify(this.$form.serializeArray()));
      var dateToday = moment().format('MMDYYYY');

      var _data = {}

      Object.keys(data).forEach(function(key) {
        var words = data[key].value.split(' ').filter(function (val) {return val;});
        words = words.join('_');

        _data[data[key].name] = words || 'x';
      });

      try {
        _data['issue'] = _data['issue'].split("/").slice(-1).pop();
      } catch(err) {
        _data['issue'] = 'X';
      }

      if (_data['description'] && _data['description'] != 'x') {
        return `${_data['type']}/${_data['issue']}_${_data['description']}`;
      } else {
        return `${_data['type']}/${_data['issue']}`;
      }
    }

    /**
       * Render text in outputArea
       * @private
       */ }, { key: '_renderOutputText', value: function _renderOutputText()
    {
      var outputString = this._processData();
      this.$outputArea.
      text(outputString);
    }

    /**
       * Copy text to clipboard
       * @private
       */ }, { key: '_copyToClipBoard', value: function _copyToClipBoard()
    {
      var clipboard = new ClipboardJS('.output__wrapper', {
        target: function target(trigger) {
          return trigger;
        } });

    }

    /**
       * Render success message after copying text to clipboard
       * @private
       */ }, { key: '_renderCopySuccessMsg', value: function _renderCopySuccessMsg()
    {
      var $el = $('<p class="success-msg">Panoya kopyalandı!</p>');
      this.$outputArea.after($el);

      setTimeout(function () {
        $el.fadeOut('normal', function () {
          $(this).remove();
        });
      }, 1500);
    }

    /**
       * Render default text to output area
       * @private
       */ }, { key: '_renderDefaultOutputText', value: function _renderDefaultOutputText()
    {
      this.$outputArea.text(this.options.defaultOutputText);
    }

    /**
       * Trigger form animation
       * @function
       */ }, { key: 'applyFormCompletionAnimation', value: function applyFormCompletionAnimation()
    {
      var animation = this.options.animationName;

      this.$outputArea.animateCss(animation, function () {
        $(this).removeClass(animation);
      });
    }

    /**
       * Check if all form inputs are filled-in
       * @function
       * @returns {Boolean} isValid - true if no form inputs are empty
       * Thanks to: https://stackoverflow.com/questions/16211871/how-to-check-if-all-inputs-are-not-empty-with-jquery
       */ }, { key: 'checkFormValidity', value: function checkFormValidity()
    {
      var $form = this.$element;

      var isValid = $(':input', $form).filter(function () {
        return $.trim($(this).val()).length == 0;
      }).length == 0;

      return isValid;
    } }]);return BranchNameGenerator;}();


BranchNameGenerator.defaults = {
  validateOn: 'fieldChange',
  liveValidate: false,
  validateOnBlur: false,
  defaultOutputText: 'branch',
  animationName: 'rubberBand fast' };


$('[data-branch-name-generator]').each(function () {
  new BranchNameGenerator($(this));
});

// Add floating particles to the page
$(document).ready(function() {
  var particlesContainer = $('<div class="particles"></div>');
  for (var i = 0; i < 9; i++) {
    particlesContainer.append('<div class="particle"></div>');
  }
  $('.page__wrapper').prepend(particlesContainer);
});
