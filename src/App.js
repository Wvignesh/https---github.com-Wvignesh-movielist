import './App.css';
import MovieCard from './Components/MovieCard';

const movies = [
  {
    image:"https://1.bp.blogspot.com/-TsUan3wsKrM/YOwTGB0r7uI/AAAAAAAABPU/SzzZEcIiN8MZ_WWHeKfLsErpxYQ934PzwCLcBGAsYHQ/w1600/Valimai_poster.jpg",
    title: "Valimai",
    discription:"Valimai  is a 2022 Indian Tamil-language action thriller film written and directed by H. Vinoth, and produced by Boney Kapoor,The film stars Ajith Kumar, Karthikeya, Huma Qureshi and Gurbani Judge. ",
    rating:8.0
  
  },

  {

   image:"https://m.media-amazon.com/images/M/MV5BMmZhMzVlNzEtMjQ3ZS00ZGJlLTk4N2YtMDIyNDNmZThhMGVmXkEyXkFqcGdeQXVyMzIyNDI4NjU@._V1_FMjpg_UX1000_.jpg",
   title:"Charlie",
   discription:"Charlie is a 2015 Indian Malayalam-language adventure drama film directed by Martin Prakkat and written by Prakkat and Produced by Prakkat, Joju George and Shebin Becker, the film stars Dulquer Salmaan and Parvathy.The music is composed by Gopi Sundar",
   rating:8.6
   

  },

  {
    image:"https://www.telugu360.com/wp-content/uploads/2022/03/RRR-11-1.jpg",
    title:"RRR",
    discription:"RRR is a 2022 Indian Telugu-language epic period action drama film directed by S. S. Rajamouli who wrote the film with V. Vijayendra Prasad. It is produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris. It is a fictional story about two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), and their fight against the British Raj.",
    rating:8.5
  },

  {
    image:"https://m.media-amazon.com/images/M/MV5BNDQxYjRmNWYtNjgyMC00MDg2LTg2OTEtZmIzNWNkMDhkOTk1XkEyXkFqcGdeQXVyMzU0ODc1MTQ@._V1_.jpg",
    title:"Diya",
    discription:"Dia is a 2020 Indian Kannada-language romantic drama film written and directed by K S Ashoka, and produced by D Krishna Chaitanya under Sri Swarnalatha Productions. The film stars Prithvi Ambar, Dheekshith Shetty, and Kushee Ravi, with a music score by B. Ajaneesh Loknath. It was released in India on 7 February 2020",
    rating:8.4
  },

  {
    image:"https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQzNjkzMzEw._V1_.jpg",
    title:"KGF2",
    discription:"K.G.F: Chapter 2 is a 2022 Indian Kannada-language period action film written and directed by Prashanth Neel, and produced by Vijay Kiragandur under the banner Hombale Films. The second instalment in a two-part series, it serves as a sequel to the 2018 film K.G.F: Chapter 1. The film stars Yash, Sanjay Dutt, Raveena Tandon, Srinidhi Shetty and Prakash Raj. It follows the assassin Rocky, who after establishing himself as the kingpin of the Kolar Gold Fields, must retain his supremacy over adversaries and government officials, while also coming to terms with his past.",
    rating:8.6
  },

  {
    image:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/beast-et00311733-13-04-2022-01-25-10.jpg",
    title:"BEAST",
    discription:"Beast is a Tamil-language action comedy film, directed by nelson dilipkumar and produced by sun pictures and film stars are Vijay,poojahegde,satish,aparnadas It revolves around an ex-RAW agent's crusade to rescue people held hostage in a shopping mall by terrorists.",
    rating:7.6
  }
]

function App() {

  return (
    < >
    <div className='container'>

      <div className='row'>

      {
       movies.map((movie)=>   <MovieCard data={movie} />   )
     } 

      </div>

    </div>
    </>
  );
}

export default App;
