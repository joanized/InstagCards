import "./components/InstagramCards.css";
import InstagramCard from "./components/InstagramCards.jsx";
import studentImages from "./assets/studentImages.js";
import "./App.css";
const App = () => {
  return (
    <div className="main_body">
      <h1 className="heading">Frontend Cohort 8 Students Instagram Cards</h1>
      <InstagramCard
        UserName={"Menegbe Joan"}
        UserLocation={"Ikeja, Lagos"}
        ProfileImage={studentImages.joan.profile}
        PostImage={studentImages.joan.post}
        PostIsVideo={studentImages.joan.postIsVideo}
        LikesCount={6867}
        CommentsCount={42}
        PostCaption={"Enhance your day with good vibes #frontend"}
      />

      <InstagramCard
        UserName={"Akubo Sunday"}
        UserLocation={"Lekki, Lagos"}
        ProfileImage={studentImages.sunday.profile}
        PostImage={studentImages.sunday.post}
        LikesCount={1250}
        CommentsCount={45}
        PostCaption={"Weekend with the squad"}
      />
      <InstagramCard
        UserName={"Jimoh Temitope"}
        UserLocation={"Yaba, Lagos"}
        ProfileImage={studentImages.temitope.profile}
        PostImage={studentImages.temitope.post}
        LikesCount={980}
        CommentsCount={-1}
        PostCaption={"Coding all day, every day"}
      />
      <InstagramCard
        UserName={"Gbotesho Omobolanle"}
        UserLocation={"Surulere, Lagos"}
        ProfileImage={studentImages.omobolanle.profile}
        PostImage={studentImages.omobolanle.post}
        LikesCount={3400}
        CommentsCount={120}
        PostCaption={"Good food, good mood"}
      />
      <InstagramCard
        UserName={"Emmanuel Rufus"}
        UserLocation={"Ajah, Lagos"}
        ProfileImage={studentImages.emmanuelRufus.profile}
        PostImage={studentImages.emmanuelRufus.post}
        LikesCount={450}
        CommentsCount={8}
        PostCaption={"New day, new goals"}
      />
      <InstagramCard
        UserName={"Royal Ifidon"}
        UserLocation={"Abuja"}
        ProfileImage={studentImages.royal.profile}
        PostImage={studentImages.royal.post}
        LikesCount={7821}
        CommentsCount={201}
        PostCaption={"Sunset by the water"}
      />
      <InstagramCard
        UserName={"Afotan Mary"}
        UserLocation={"Ibadan, Oyo"}
        ProfileImage={studentImages.mary.profile}
        PostImage={studentImages.mary.post}
        LikesCount={1520}
        CommentsCount={33}
        PostCaption={"Family first always"}
      />
      <InstagramCard
        UserName={"Marvellous Godsave"}
        UserLocation={"Port Harcourt"}
        ProfileImage={studentImages.marvellous.profile}
        PostImage={studentImages.marvellous.post}
        LikesCount={2310}
        CommentsCount={56}
        PostCaption={"Learning React is fun"}
      />
      <InstagramCard
        UserName={"Onyema Divine"}
        UserLocation={"Victoria Island, Lagos"}
        ProfileImage={studentImages.divine.profile}
        PostImage={studentImages.divine.post}
        LikesCount={5600}
        CommentsCount={98}
        PostCaption={"Out and about in town"}
      />
      <InstagramCard
        UserName={"Owoicho ThankGod"}
        UserLocation={"Ikorodu, Lagos"}
        ProfileImage={studentImages.thankGod.profile}
        PostImage={studentImages.thankGod.post}
        LikesCount={310}
        CommentsCount={0}
        PostCaption={"Just chilling"}
      />
      <InstagramCard
        UserName={"Nwachukwu Victor"}
        UserLocation={"Maryland, Lagos"}
        ProfileImage={studentImages.nwachukwu.profile}
        PostImage={studentImages.nwachukwu.post}
        LikesCount={4100}
        CommentsCount={77}
        PostCaption={"Birthday month is here"}
      />
      <InstagramCard
        UserName={"Success Oiko"}
        UserLocation={"Enugu"}
        ProfileImage={studentImages.oikoSuccess.profile}
        PostImage={studentImages.oikoSuccess.post}
        LikesCount={890}
        CommentsCount={12}
        PostCaption={"Home sweet home"}
      />
      <InstagramCard
        UserName={"Jesse Adekoya"}
        UserLocation={"Badagry, Lagos"}
        ProfileImage={studentImages.jesse.profile}
        PostImage={studentImages.jesse.post}
        PostIsVideo={studentImages.jesse.postIsVideo}
        LikesCount={2750}
        CommentsCount={64}
        PostCaption={"Beach day with friends"}
      />
      <InstagramCard
        UserName={"Uzoanya David"}
        UserLocation={"Gbagada, Lagos"}
        ProfileImage={studentImages.david.profile}
        PostImage={studentImages.david.post}
        LikesCount={1100}
        CommentsCount={19}
        PostCaption={"Keep pushing forward"}
      />
      <InstagramCard
        UserName={"Steven Ewekeblem"}
        UserLocation={"Kano"}
        ProfileImage={studentImages.steven.profile}
        PostImage={studentImages.steven.post}
        LikesCount={6200}
        CommentsCount={150}
        PostCaption={"Style is everything"}
      />
      <InstagramCard
        UserName={"Chidebelu Raymond"}
        UserLocation={"Magodo, Lagos"}
        ProfileImage={studentImages.raymond.profile}
        PostImage={studentImages.raymond.post}
        LikesCount={730}
        CommentsCount={5}
        PostCaption={"Quiet moments"}
      />
      <InstagramCard
        UserName={"Esther Onyijiuwa"}
        UserLocation={"Festac, Lagos"}
        ProfileImage={studentImages.esther.profile}
        PostImage={studentImages.esther.post}
        LikesCount={3890}
        CommentsCount={88}
        PostCaption={"Game night was fun"}
      />
      <InstagramCard
        UserName={"Shina Stephen"}
        UserLocation={"Akure, Ondo"}
        ProfileImage={studentImages.shina.profile}
        PostImage={studentImages.shina.post}
        LikesCount={520}
        CommentsCount={0}
        PostCaption={"Reading and relaxing"}
      />
      <InstagramCard
        UserName={"Dike Victory"}
        UserLocation={"Ilorin, Kwara"}
        ProfileImage={studentImages.victor.profile}
        PostImage={studentImages.victor.post}
        LikesCount={4470}
        CommentsCount={102}
        PostCaption={"Grateful for today"}
      />
      <InstagramCard
        UserName={"Anozie Maryolivia"}
        UserLocation={"Oshodi, Lagos"}
        ProfileImage={studentImages.maryolivia.profile}
        PostImage={studentImages.maryolivia.post}
        LikesCount={1960}
        CommentsCount={41}
        PostCaption={"Work hard, play hard"}
      />
      <InstagramCard
        UserName={"Ahiwe Victor"}
        UserLocation={"Ajegunle, Lagos"}
        ProfileImage={studentImages.vikky.profile}
        PostImage={studentImages.vikky.post}
        LikesCount={8200}
        CommentsCount={310}
        PostCaption={"Big dreams only"}
      />
      <InstagramCard
        UserName={"Balogun Ayomide"}
        UserLocation={"Benin City"}
        ProfileImage={studentImages.ayomide.profile}
        PostImage={studentImages.ayomide.post}
        LikesCount={640}
        CommentsCount={9}
        PostCaption={"Coffee first"}
      />
      <InstagramCard
        UserName={"Nicholas Victor"}
        UserLocation={"Ojota, Lagos"}
        ProfileImage={studentImages.nicholas.profile}
        PostImage={studentImages.nicholas.post}
        LikesCount={2230}
        CommentsCount={47}
        PostCaption={"Smile more"}
      />
      <InstagramCard
        UserName={"Daniel Chukwu"}
        UserLocation={"Abeokuta, Ogun"}
        ProfileImage={studentImages.daniel.profile}
        PostImage={studentImages.daniel.post}
        LikesCount={1380}
        CommentsCount={26}
        PostCaption={"Nature is healing"}
      />
      <InstagramCard
        UserName={"Frankin Ikebido"}
        UserLocation={"Apapa, Lagos"}
        ProfileImage={studentImages.ikebidoFrank.profile}
        PostImage={studentImages.ikebidoFrank.post}
        LikesCount={5050}
        CommentsCount={134}
        PostCaption={"Throwback to the good days"}
      />
      <InstagramCard
        UserName={"Fatiu Ataolagbe"}
        UserLocation={"Jos, Plateau"}
        ProfileImage={studentImages.fatiulahi.profile}
        PostImage={studentImages.fatiulahi.post}
        LikesCount={970}
        CommentsCount={14}
        PostCaption={"Frontend student life"}
      />
      <InstagramCard
        UserName={"Sochima Emmanuel"}
        UserLocation={"Ikoyi, Lagos"}
        ProfileImage={studentImages.emmanuel.profile}
        PostImage={studentImages.emmanuel.post}
        LikesCount={3120}
        CommentsCount={71}
        PostCaption={"Last card, still shining"}
      />
    </div>
  );
};

export default App;
