const motivations = [  
    "Believe you can and you're halfway there.",  
    "Your limitation—it's only your imagination.",  
    "Push yourself, because no one else is going to do it for you.",  
    "Great things never come from comfort zones.",  
    "Dream it. Wish it. Do it.",  
    "Success doesn't just find you. You have to go out and get it.",  
    "The harder you work for something, the greater you'll feel when you achieve it.",  
    "Dream bigger. Do bigger.",  
    "Don't stop when you're tired. Stop when you're done.",  
    "Wake up with determination. Go to bed with satisfaction.",  
    "The key to success is to focus on goals, not obstacles.",  
    "You are never too old to set another goal or to dream a new dream.",  
    "Setting goals is the first step in turning the invisible into the visible.",  
    "Don't wait for opportunity. Create it.",  
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",  
    "The more you praise and celebrate your life, the more there is in life to celebrate.",  
    "Hustle in silence and let your success make the noise.",  
    "You don’t have to be great to start, but you have to start to be great.",  
    "It’s not whether you get knocked down, it’s whether you get up.",  
    "Add life to your days, not days to your life.",  
    "Your only limit is your mind."  
];  

// Get today's date  
const today = new Date().toDateString();  

// Check if a motivation quote has already been shown today  
if (!localStorage.getItem('lastMotivationDate') || localStorage.getItem('lastMotivationDate') !== today) {  
    localStorage.setItem('lastMotivationDate', today);  
    localStorage.setItem('todayMotivation', motivations[Math.floor(Math.random() * motivations.length)]);  
}  

// Display the motivation quote  
document.getElementById('motivation-text').innerText = localStorage.getItem('todayMotivation');  

// Event listener for the button  
document.getElementById('newMotivationBtn').addEventListener('click', () => {  
    localStorage.setItem('todayMotivation', motivations[Math.floor(Math.random() * motivations.length)]);  
    document.getElementById('motivation-text').innerText = localStorage.getItem('todayMotivation');  
});  
