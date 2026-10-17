import "@/styles/landing.scss";
export default function Home() {

  const isLoggedIn = false;


  if (!isLoggedIn) {
    return (
      <div className="landing-page light">
        <h1>Welcome to Bloom</h1>
        <p>Your HR solution, simplified.</p>
      </div>
    );
  }

  return (
   <div className="landing-page light">

   </div>
  );
}
