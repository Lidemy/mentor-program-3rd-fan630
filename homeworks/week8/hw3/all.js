const game = document.querySelector('.game')
game.classList.add('black')

const request = new XMLHttpRequest()
// request.setRequestHeader('Content-type', 'application/vnd.twitchtv.v5+json')
request.onload = () => {
  if (request.status >= 200 && request.status < 400) {
    const response = request.responseText
    const json = JSON.parse(response)
    const streamer = json.streams
    for (let i = 0; i < streamer.length; i += 1) {
      const div = document.createElement('div')
      div.classList.add('game__content')
      div.innerHTML = `
                        <div>
                            <a href="${streamer[i].channel.url}" class="game＿＿link">
                                <img src=${streamer[i].preview.medium} alt="#">
                            </a>
                        </div>
                        <div class="game__column">
                            <div class="game__column__avatar">
                                    <img src="${streamer[i].channel.logo}" alt="">
                            </div>
                            <div class="game__column__text">
                                <div class="game__status">${streamer[i].channel.status}</div>
                                <div class="game＿＿broadCastName ">${streamer[i].channel.name}</div>
                            </div>
                        </div>`
      document.querySelector('.game__row').appendChild(div)
    }
  } else {
    console.log('error')
  }
}
request.open('GET', 'https://api.twitch.tv/kraken/streams/?client_id=s2xusiifgc7v1qjkdfdn5drwrmams6&game=League%20of%20Legends&limit=20', true)
request.send()
