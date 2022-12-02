function createTaskBarHtml(n) {
    return `
    <div class="task-bar-child">
        <img src="${taskBarImg[n]}">
        <a href="">${taskBar[n]}</a>
    </div>
    `;
}

function createStoryCircleHtml(n) {
    return `
    <div class="story-child">
        <div class="color-gradient">
            <img class="profil-pic" src="${storyImgs[n]}">
        </div>
        <span>${storyCharacter[n]}</span>
    </div>
    `;
}

function createPostHtml(post, i, x) {
    return `
    <div class="post">
        <div class="post-top">
            <div class="post-profile">
                <div class="post-color-gradient">
                    <img src="${post['profilepic']}" alt="">
                </div>
                <div class="post-author-location">
                    <span>${post['author']}</span>
                    <span>${post['location']}</span>
                </div>
            </div>
            <img src="./icon/dots.png" alt="">
        </div>
        <div class="post-img">
            <img onclick="renderComments(${i})" src="${post['image']}">
        </div>
        <div class="post-desription">
            <div class="post-icon-section">
                <div>
                    <img onclick="changeHeart(${i})" id="heart${i}" src="./icon/heart.png" alt="">
                    <img src="./icon/plaudern.png" alt="">
                    <img src="./icon/message.png" alt="">
                </div>
                <div>
                    <img src="./icon/save.png" alt="">
                </div>
            </div>
            <div class="post-bottom">
                <span>Gefällt ... Personen</span>
                <span>${post['author']} ${post['description']}</span>
                <span onclick="renderComments(${i})" >Alle ... Kommentare ansehen</span>
                <span>vor ... Stunden</span>
            </div>
        </div>
        <div class="post-comment">
            <div class="post-comment-left">
                <img src="./icon/lacheln.png">
                    <input id="commentInput${i}" placeholder="Kommentieren...">
            </div>
            <a onclick="addComment(${i})" >Posten</a>
        </div>
    </div>
    `;
}

function singleCommentHtml(i, n) {
    return `
    <div class="single-comments">
        <div class="post-profile">
                <img class="my-profile" src="./profile/profile.jpeg" alt="">
            <div class="post-author-location">
                <span>Alina</span>
            </div>
        </div>
        <div class="single-comment">${posts[i]['comments'][n]}</div>
    </div>`;
}

function commentsHtml(i) {
    return `
    <div class="comments-img-div">
        <img class="comments-img" src="${posts[i]['image']}">
    </div>
    <div id="mainComment" class="main-comment">
        <div class="comment-header">
            <div class="post-profile">
                <div class="post-color-gradient">
                    <img src="${posts[i]['profilepic']}" alt="">
                </div>
                <div class="post-author-location">
                    <span>${posts[i]['author']}</span>
                </div>
            </div>
            <img src="./icon/dots.png" alt="">
        </div>
        <div id="commentSection" class="comment-section"> </div>
        <div class="post-desription">
            <div class="post-icon-section">
                <div>
                    <img onclick="changeHeart(${i})" id="heart${i}" src="./icon/heart.png" alt="">
                    <img src="./icon/plaudern.png" alt="">
                    <img src="./icon/message.png" alt="">
                </div>
                <div>
                    <img src="./icon/save.png" alt="">
                </div>
            </div>
            <div class="post-bottom">
                <span>Gefällt ... Personen</span>
                <span>vor ... Stunden</span>
            </div>
        </div>
        <div class="post-comment">
            <div class="post-comment-left">
                <img src="./icon/lacheln.png">
                    <input id="commentSmallInput${i}" placeholder="Kommentieren...">
            </div>
            <a onclick="addComment(${i}); renderComments(${i});">Posten</a>
        </div>
    </div>
    `;
}

function rightSectionHtml() {
    return `
    <div class="right-side">
        <div class="profile">
            <img class="profile-pic" src="./profile/profile.jpeg">
            <span>Alina</span>
        </div>
        <a> Wechseln </a>
    </div>
    <div class="right-side">
        <span> Vorschläge für dich </span>
        <a> Alle anzeigen </a>
    </div>
    <div class="recommended-follower" id="recommendations">
    </div>
    `;
}

function recommendations(i) {
    return`
    <div class="right-side">
        <div class="profile">
            <img class="profile-pic" src="${recommendationsPic[i]}">
            <span>${recommendationsName[i]}</span>
        </div>
        <a> Folgen </a>
    </div>
    `;
}


