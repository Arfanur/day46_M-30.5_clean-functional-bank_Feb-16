const players = document.getElementsByClassName('player');
function setPlayerStyle(player) {
    player.style.border = '1px solid red';
    player.style.borderRadius = '15px';
    player.style.margin = '10px';
    player.style.padding = '10px';
}
for (const player of players) {
    setPlayerStyle(player);
    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = 'yellow';
    // });
}
function addPlayer() {
    const playerContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo temporibus at, iure fugiat quasi quia
    soluta ut ad eum. Eos ut ipsam mollitia, ad numquam deleniti praesentium facere cumque consequatur?
    </p>
    `;
    setPlayerStyle(player);
    playerContainer.appendChild(player);
    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = 'yellow';
    // });
}

document.getElementById('players').addEventListener('click', function (event) {
    console.log();
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'yellow';
    }
    else {
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
});