.voice-widget {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 99999;
}
.voice-widget-main {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0 3px 24px rgba(0,0,0,0.10);
  padding: 4px 14px 4px 4px;
  min-width: 240px;
  min-height: 56px;
}
.voice-logo {
  width: 44px; height: 44px;
  background: #fff;
  border-radius: 50%;
  margin-right: 8px;
  border: 2.5px solid #f5f5f5;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 0 6px rgba(0,0,0,0.03);
}
.voice-chat-btn {
  display: flex;
  align-items: center;
  background: #111;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  border: none;
  border-radius: 22px;
  padding: 9px 25px 9px 16px;
  margin-right: 10px;
  cursor: pointer;
  transition: background 0.18s;
  min-width: 145px;
  justify-content: center;
  outline: none;
  letter-spacing: 0.5px;
}
.voice-chat-btn.active {
  background: #969696;
}
.voice-lang {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 50%;
  border: 2px solid #eee;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  padding: 6px 12px;
  font-size: 17px;
  margin-left: 2px;
  min-width: 38px;
}
.flag-emoji {
  margin-right: 2px;
  font-size: 22px;
  line-height: 1;
}
@media (max-width: 500px) {
  .voice-widget { bottom: 8px; right: 8px; }
  .voice-widget-main { min-width: 170px; padding-right: 4px; }
  .voice-logo { width: 32px; height: 32px; }
  .voice-chat-btn { font-size: 16px; min-width: 90px; }
}
