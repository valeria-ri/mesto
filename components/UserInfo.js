class UserInfo {
  constructor({userNameSelector, userJobSelector}) {
    this._userName = document.querySelector(userNameSelector);
    this._userJob = document.querySelector(userJobSelector);
  }

  getUserInfo() {
    this._userInfo = {
      name: this._userName.textContent,
      job: this._userJob.textContent
    }
    return this._userInfo;
  }

  setUserInfo(userNameInput, userJobInput) {
    this._userName.textContent = userNameInput.value;
    this._userJob.textContent = userJobInput.value;
  }
}

export default UserInfo;