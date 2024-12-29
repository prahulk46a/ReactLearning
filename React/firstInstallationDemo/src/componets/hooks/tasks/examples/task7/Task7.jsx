import React, { useState } from "react";

const Task7 = () => {
  let data = [
    {
      author: "Albert Einstein",
      quote:
        "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    },
    {
      author: "Isaac Newton",
      quote:
        "If I have seen further it is by standing on the shoulders of Giants.",
    },
    {
      author: "Mark Twain",
      quote: "The secret of getting ahead is getting started.",
    },
    {
      author: "Maya Angelou",
      quote:
        "You may not control all the events that happen to you, but you can decide not to be reduced by them.",
    },
    {
      author: "Confucius",
      quote:
        "Our greatest glory is not in never falling, but in rising every time we fall.",
    },
    {
      author: "Winston Churchill",
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    },
    {
      author: "Nelson Mandela",
      quote: "It always seems impossible until it’s done.",
    },
    {
      author: "William Shakespeare",
      quote: "To be, or not to be, that is the question.",
    },
    {
      author: "Abraham Lincoln",
      quote: "The best way to predict your future is to create it.",
    },
    {
      author: "Steve Jobs",
      quote:
        "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    },
    {
      author: "F. Scott Fitzgerald",
      quote:
        "In a real dark night of the soul, it is always three o’clock in the morning, day after day.",
    },
    {
      author: "Mahatma Gandhi",
      quote: "Be the change that you wish to see in the world.",
    },
    {
      author: "J.K. Rowling",
      quote:
        "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    },
    {
      author: "Ralph Waldo Emerson",
      quote:
        "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    },
    {
      author: "Charles Darwin",
      quote:
        "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
    },
    {
      author: "Victor Hugo",
      quote: "Even the darkest night will end and the sun will rise.",
    },
    {
      author: "Charles Dickens",
      quote: "It was the best of times, it was the worst of times.",
    },
    {
      author: "Oscar Wilde",
      quote: "Be yourself; everyone else is already taken.",
    },
    {
      author: "Benjamin Franklin",
      quote: "An investment in knowledge pays the best interest.",
    },
    {
      author: "Aristotle",
      quote:
        "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    },
    {
      author: "John F. Kennedy",
      quote:
        "Ask not what your country can do for you – ask what you can do for your country.",
    },
    {
      author: "Helen Keller",
      quote: "Alone we can do so little; together we can do so much.",
    },
    {
      author: "Leonardo da Vinci",
      quote: "Learning never exhausts the mind.",
    },
    {
      author: "Pablo Picasso",
      quote: "Everything you can imagine is real.",
    },
    {
      author: "Theodore Roosevelt",
      quote: "Do what you can, with what you have, where you are.",
    },
    {
      author: "Thomas Edison",
      quote:
        "Genius is one percent inspiration, ninety-nine percent perspiration.",
    },
    {
      author: "Albert Einstein",
      quote: "Imagination is more important than knowledge.",
    },
    {
      author: "Eleanor Roosevelt",
      quote:
        "The future belongs to those who believe in the beauty of their dreams.",
    },
    {
      author: "Henry Ford",
      quote:
        "Whether you think you can, or you think you can’t – you’re right.",
    },
    {
      author: "Bruce Lee",
      quote:
        "Absorb what is useful, discard what is not, add what is uniquely your own.",
    },
    {
      author: "Walt Disney",
      quote: "The way to get started is to quit talking and begin doing.",
    },
    {
      author: "Albert Einstein",
      quote:
        "Two things are infinite: the universe and human stupidity; and I’m not sure about the universe.",
    },
    {
      author: "Gandhi",
      quote: "An eye for an eye only ends up making the whole world blind.",
    },
    {
      author: "Dalai Lama",
      quote:
        "Happiness is not something ready made. It comes from your own actions.",
    },
    {
      author: "Stephen Hawking",
      quote: "Remember to look up at the stars and not down at your feet.",
    },
    {
      author: "Confucius",
      quote:
        "When we see men of a contrary character, we should turn inwards and examine ourselves.",
    },
    {
      author: "William Wordsworth",
      quote: "Fill your paper with the breathings of your heart.",
    },
    {
      author: "Leo Tolstoy",
      quote:
        "Everyone thinks of changing the world, but no one thinks of changing himself.",
    },
    {
      author: "George Bernard Shaw",
      quote:
        "Life isn’t about finding yourself. Life is about creating yourself.",
    },
    {
      author: "Sylvia Plath",
      quote:
        "The only thing that makes life possible is permanent, intolerable uncertainty; not knowing what comes next.",
    },
    {
      author: "Rainer Maria Rilke",
      quote:
        "Let everything happen to you: beauty and terror. Just keep going. No feeling is final.",
    },
    {
      author: "Paulo Coelho",
      quote:
        "When you want something, all the universe conspires in helping you to achieve it.",
    },
    {
      author: "J.R.R. Tolkien",
      quote: "Not all those who wander are lost.",
    },
    {
      author: "Marilyn Monroe",
      quote:
        "Imperfection is beauty, madness is genius, and it’s better to be absolutely ridiculous than absolutely boring.",
    },
    {
      author: "Dr. Seuss",
      quote:
        "You’re off to great places! Today is your day! Your mountain is waiting, so… get on your way!",
    },
    {
      author: "John Lennon",
      quote: "Imagine all the people living life in peace.",
    },
    {
      author: "Mother Teresa",
      quote: "If you can't feed a hundred people, then feed just one.",
    },
    {
      author: "T.S. Eliot",
      quote:
        "Only those who will risk going too far can possibly find out how far one can go.",
    },
    {
      author: "Julius Caesar",
      quote: "Veni, vidi, vici.",
    },
    {
      author: "Socrates",
      quote: "The unexamined life is not worth living.",
    },
    {
      author: "Marie Curie",
      quote: "Nothing in life is to be feared, it is only to be understood.",
    },
    {
      author: "George Orwell",
      quote: "In a time of deceit telling the truth is a revolutionary act.",
    },
    {
      author: "Homer",
      quote: "The greatest wealth is to live content with little.",
    },
    {
      author: "Alexander Pope",
      quote: "To err is human; to forgive, divine.",
    },
    {
      author: "Brene Brown",
      quote: "Courage starts with showing up and letting ourselves be seen.",
    },
    {
      author: "Frida Kahlo",
      quote: "I paint flowers so they will not die.",
    },
    {
      author: "Sun Tzu",
      quote: "The supreme art of war is to subdue the enemy without fighting.",
    },
    {
      author: "Gustave Flaubert",
      quote:
        "Be steady and well-ordered in your life so that you can be fierce and original in your work.",
    },
    {
      author: "Virginia Woolf",
      quote: "For most of history, Anonymous was a woman.",
    },
    {
      author: "Dante Alighieri",
      quote:
        "The darkest places in hell are reserved for those who maintain their neutrality in times of moral crisis.",
    },
    {
      author: "Kurt Vonnegut",
      quote: "So it goes.",
    },
    {
      author: "Henry David Thoreau",
      quote:
        "Go confidently in the direction of your dreams. Live the life you have imagined.",
    },
    {
      author: "William Blake",
      quote:
        "If the doors of perception were cleansed every thing would appear to man as it is, infinite.",
    },
    {
      author: "Sylvia Plath",
      quote: "The worst enemy to creativity is self-doubt.",
    },
    {
      author: "James Baldwin",
      quote:
        "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
    },
    {
      author: "Oscar Wilde",
      quote:
        "We are all in the gutter, but some of us are looking at the stars.",
    },
    {
      author: "Hannah Arendt",
      quote:
        "The most radical revolutionary will become a conservative the day after the revolution.",
    },
    {
      author: "Franz Kafka",
      quote:
        "I cannot escape myself, but I can prevent myself from being myself.",
    },
    {
      author: "Nobel Prize Winner",
      quote:
        "The Nobel Prize has been a recognition of a life’s work, a pursuit of excellence.",
    },
    {
      author: "Margaret Atwood",
      quote: "A word after a word after a word is power.",
    },
    {
      author: "Antoine de Saint-Exupéry",
      quote:
        "All grown-ups were once children... but only a few of them remember it.",
    },
    {
      author: "Victor Hugo",
      quote: "To love another person is to see the face of God.",
    },
    {
      author: "Haruki Murakami",
      quote: "If you remember me, then I don’t care if everyone else forgets.",
    },
    {
      author: "Zadie Smith",
      quote: "The past is always tense, the future perfect.",
    },
    {
      author: "Jack Kerouac",
      quote:
        "Great things are not accomplished by those who yield to trends and fads and popular opinion.",
    },
    {
      author: "Leo Tolstoy",
      quote:
        "All, everything that I understand, I understand only because I love.",
    },
    {
      author: "Terry Pratchett",
      quote: "In the beginning there was nothing, which exploded.",
    },
    {
      author: "David Foster Wallace",
      quote:
        "The most obvious, ubiquitous, important realities are often the ones that are the hardest to see and talk about.",
    },
  ];

  let [randomQuote, setQuote] = useState(data[0]);

  let handleClick = () => {
    randomQuote = data[Math.floor(Math.random() * 51)];
    setQuote(randomQuote);
    console.log(randomQuote);
  };

  return (
    <div className="flex justify-center items-center flex-col h-[100vh] gap-10">
      <div className="bg-slate-200 w-[60vw] h-[60vh] text-4xl text-gray-800 font-bold p-[200px] shadow-lg rounded-lg">
        <div className="flex items-center justify-center p-4">
          <p>"{randomQuote.quote}"</p>
        </div>
        <div className="flex items-center justify-end p-4">
          <p>~{randomQuote.author}</p>
        </div>
      </div>

      <button
        className="bg-purple-500 p-2 text-white rounded-md font-serif"
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
};

export default Task7;
