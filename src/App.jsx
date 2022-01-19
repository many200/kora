import './App.css';
import img from '../src/assets/logo.jpg'

function App() {
  return (
    <div className="App">
      <div className='titre'  style={{fontSize:"25px", color:"white"}}>
      مرحبا!
 شاهد جميع المباريات مباشرة على موقع الكورة
      </div>
      <div>
        <button className='btn btn-danger m-3' onClick={() => window.open("https://yalla.koraextra.com/")}>الرئسية</button>
        <button className='btn btn-danger m-3' onClick={() => window.open("https://yalla.koraextra.com/p/match.html")}>المباريات</button>
        <button className='btn btn-danger m-3' onClick={() => window.open("https://yalla.koraextra.com/p/teams.html")}>الاندية</button>
        <button className='btn btn-danger m-3' onClick={() => window.open("https://yalla.koraextra.com/p/championships.html")}>البطولات</button>
        <button className='btn btn-danger m-3' onClick={() => window.open("https://yalla.koraextra.com/p/channels.html")}> القنوات</button>
        <button className='btn btn-danger m-3' onClick={() => window.open("https://yalla.koraextra.com/p/news.html")}> الاخبار</button>
        <button className='btn btn-danger m-3' onClick={() => window.open("https://yalla.koraextra.com/p/mobile.html")}>جوال</button>
        <button className='btn btn-danger m-3' onClick={() => window.open("https://yalla.koraextra.com/p/goals.html")}>الاهداف</button>
        
      </div>
       <div>
    
      
      <button className='btn btn-danger m-3' onClick={() => window.open("https://yalla.koraextra.com/?view=tomo")}>مباريات الغد</button>
      <button className='btn btn-warning m-3' onClick={() => window.open("https://yalla.koraextra.com/")}>مباريات اليوم</button>
      <button className='btn btn-success m-3' onClick={() => window.open("https://yalla.koraextra.com/?view=yest")}>مباريات الأمس</button>
     </div>
     
      <div>
      <img src={img} alt="" width="60%" height="30%" style={{marginTop:"20px"}}/>

      </div>
    
    <div className='mt-3' style={{fontSize:"25px", color:"white"}}>
    موقع كورة اكسترا | kora extra , له دومين واحد فقط www.koraextra.com , وليس لنا اي مواقع اخري ومايظهر في محركات البحث تقليد للموقع الاصلي
    </div>
    </div>
  );
}

export default App;
