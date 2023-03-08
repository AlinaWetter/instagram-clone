taskBar = ['Startseite', 'Suche', 'Entdecken', 'Nachrichten', 'Benachrichtigungen', 'Erstellen', 'Profil', 'Mehr']
taskBarImg = ['./icon/home.png', './icon/loupe.png', './icon/explore.png', './icon/message.png', './icon/heart.png', './icon/add.png', './icon/user.png', './icon/burger.png']

storyCharacter = ['PDerek', 'MissSun', 'YCurly', 'JohnDundee', 'Valentina', 'JJ', 'christinee', 'Lola_W']
storyImgs = ['./profile/portrait1.jpg', './profile/portrait2.jpg', './profile/portrait3.jpg', './profile/portrait4.jpg', './profile/portrait5.jpg', './profile/portrait6.jpg', './profile/portrait7.jpg', './profile/portrait8.jpg']

recommendationsName = ['sammyJo', 'Toni', 'lala', 'Timowe', 'Horses']
recommendationsPic = ['./profile/rec1.jpg', './profile/rec2.jpg', './profile/rec3.jpg', './profile/rec4.jpg', './profile/rec5.jpg']

let x = 500;

posts = [
    {
        'author': 'MissSun',
        'profilepic': './profile/portrait2.jpg',
        'image': './imgs/cat.jpg',
        'location': 'home',
        'description': 'My little Sunshine',
        'comments': []
    },
    {
        'author': 'YCurly',
        'profilepic': './profile/portrait3.jpg',
        'image': './imgs/subway.jpg',
        'location': 'City',
        'description': 'Curls everywhere',
        'comments': []
    },
    {
        'author': 'JJ',
        'profilepic': './profile/portrait6.jpg',
        'image': './imgs/building.jpg',
        'location': '',
        'description': 'another fancy shot',
        'comments': []
    },
    {
        'author': 'PDerek',
        'profilepic': './profile/portrait1.jpg',
        'image': './imgs/coffee.jpg',
        'location': 'favorite cafe in town',
        'description': 'Love working outside of my apartment',
        'comments': []
    },
    {
        'author': 'PDerek',
        'profilepic': './profile/portrait1.jpg',
        'image': './imgs/rottweiler.jpg',
        'location': 'park',
        'description': 'good Boy',
        'comments': []
    },
    {
        'author': 'Valentina',
        'profilepic': './profile/portrait5.jpg',
        'image': './imgs/kids.jpg',
        'location': 'Mexico',
        'description': 'That is one of a festival',
        'comments': []
    },
    {
        'author': 'JohnDundee',
        'profilepic': './profile/portrait4.jpg',
        'image': './imgs/elephant.jpg',
        'location': 'Afrika',
        'description': 'precious animal',
        'comments': []
    },
    {
        'author': 'Valentina',
        'profilepic': './profile/portrait5.jpg',
        'image': './imgs/street.jpg',
        'location': '',
        'description': 'rainy day',
        'comments': []
    }
]

function createTaskBar() {
    let taskBarSection = document.getElementById('taskBar');
    taskBarSection.innerHTML = '';

    for (n = 0; n < taskBar.length; n++) {
        taskBarSection.innerHTML += createTaskBarHtml(n);
    }
}

function createStoryBar() {
    let storySection = document.getElementById('storyBar');
    storySection.innerHTML = '';

    for (n = 0; n < storyCharacter.length; n++) {
        storySection.innerHTML += createStoryCircleHtml(n);
    }
}

function createPosts() {
    let contentSection = document.getElementById('contentSection');
    contentSection.innerHTML = '';

    for (i = 0; i < posts.length; i++) {
        post = posts[i];
        contentSection.innerHTML += createPostHtml(post, i, x);
    }

}

function changeHeart(i) {
    let specificHeart = document.getElementById(`heart${i}`)
    if (specificHeart.src.includes('heart.png')) {
        specificHeart.src = './icon/heart-fill.png';
        x = x - 1;
    } else {
        specificHeart.src = './icon/heart.png';
        x = x + 1;
    }
}

function addComment(i) {
    let element = document.getElementById('commentDiv');
    
    

    if (element.classList.contains('d-none')) {
      let input = document.getElementById(`commentInput${i}`);
        if(input.value.length > 0) {
            
            posts[i]['comments'].push(input.value);
            input.value = '';
        } else {
            alert('Bitte geben Sie einen Kommentar ein')
        }
    } else {
        
          let input2 = document.getElementById(`commentSmallInput${i}`);
        if(input2.value.length > 0) {
            
            posts[i]['comments'].push(input2.value);
            input2.value = '';
        } else {
            alert('Bitte geben Sie einen Kommentar ein')
        }
          
    }
}

function renderComments(i) {
    document.getElementById('body').classList.add('no-scroll')
    document.getElementById('commentDiv').classList.remove('d-none')
    let comments = document.getElementById('comments');
    comments.innerHTML = '';
    comments.innerHTML += commentsHtml(i);

    createComments(i);

}

function createComments(i) {
    let commentSection = document.getElementById('commentSection');
    commentSection.innerHTML = '';

    for (n = 0; n < posts[i]['comments'].length; n++) {
        commentSection.innerHTML +=
            singleCommentHtml(i, n);
    }
}

function closeComments() {
    document.getElementById('body').classList.remove('no-scroll')
    document.getElementById('commentDiv').classList.add('d-none')
}

function renderRightSection() {
    section = document.getElementById('rightSection');
    section.innerHTML = '';
    section.innerHTML += rightSectionHtml();
    renderRecommendations();
}

function renderRecommendations() {
    let element = document.getElementById('recommendations');
        element.innerHTML = ''
    for(i = 0; i < recommendationsName.length; i++) {
        element.innerHTML += recommendations(i);
    }

}