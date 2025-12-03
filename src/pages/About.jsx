import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box, Grid, Tabs, Tab } from "@mui/material";
import { People, EmojiEvents, MenuBook, School, Phone, Email, Schedule } from "@mui/icons-material";
import simpleVedasImg from "../assets/images/simple-vedas.jpg";
import abouth from "../assets/images/abouth.jpg";
import srilaPrabhupadaImg from "../assets/images/Srila-Prabhupada.jpg";
import madhusudanaVisnuDasImg from "../assets/images/madhusudan-visnu-dev.png";
import PageHeader from "./PageHeader";
import NewsLetter from "./NewsLetter";

export default function About() {
  const { slug } = useParams();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  
  const getContent = () => {
    switch (slug) {
      case "simple-vedas":
        return (
          <>
           <PageHeader backgroundImage={abouth} title="SIMPLE VEDAS" />
          <Box className="flex flex-col md:flex-row items-start gap-4 md:gap-6 w-full max-w-[1200px] mx-auto p-4 md:p-6 rounded-lg mt-6 overflow-hidden">
            <Box className="flex flex-col-reverse md:flex-row items-stretch w-full p-4">
              {/* Left side - Text Box */}
              <Box className="flex-1 md:flex-[0_0_65%] p-4 flex flex-col overflow-hidden">
                <Typography 
                  component="div"
                  className="text-justify font-bold [word-spacing-10px] md:text-sm text-black [&>p]:mt-0 [&>p]:mb-2 [&>p:first-of-type]:mt-0 [&>strong]:font-bold"
                >
                  <p className="leading-[1.8] [word-spacing:0.2em] text-md pb-2">
                    <span className="font-bold text-[1.05em]">Veda</span> means knowledge. Any knowledge we accept is{" "}
                    <span className="font-bold text-[1.05em]">Veda</span>, for the teachings of the Vedas are the original
                    knowledge. The knowledge found therein is both physical and
                    metaphysical. Thus, for ages, people have accepted the Vedas
                    and have been benefited.
                  </p>

                  <p className="leading-[1.8] [word-spacing:0.2em] text-md pb-2">
                    Simple Vedas is an initiative to avail the ancient spiritual
                    techniques given in the Vedas to the people of the modern times.
                    As the name suggests, Simple Vedas aims to make the Vedas
                    simple without losing the depth of the message that it offers
                    to human society.
                  </p>

                  <p className="leading-[1.8] [word-spacing:0.2em] text-md pb-2">
                    The secrets of the <span className="font-bold text-[1.05em]">Gita</span>, the mysteries of the{" "}
                    <span className="font-bold text-[1.05em]">Puranas</span>, the life lessons from the{" "}
                    <span className="font-bold text-[1.05em]">Ramayana</span> and the <span className="font-bold text-[1.05em]">Mahabharata</span>, the synthesis
                    of science and spirituality, the complexities of the{" "}
                    <span className="font-bold text-[1.05em]">Upanishads</span> and the <span className="font-bold text-[1.05em]">Vedanta</span>, spiritual
                    practices, such as mindfulness, yoga, inner healing, chanting
                    of Vedic hymns, and so much more will be served at Simple Vedas.
                  </p>

                  <p className="leading-[1.8] [word-spacing:0.2em] text-md pb-2">
                    The purpose of Simple Vedas is to serve as a bridge between
                    the ancient and the modern, between the spiritual and the
                    material, between the philosophy and the practice, so that one can easily
                    understand, appreciate, and apply the Vedic technologies in
                    one's life, bringing to it more meaning and content, and thus enjoy the
                    bliss that we all are really made for.
                  </p>
                </Typography>
              </Box>

              {/* Right side - Image */}
              <Box className="w-full  md:flex-[0_0_35%] flex justify-center items-start overflow-hidden md:pl-6">
                <Box
                  component="img"
                  src={simpleVedasImg}
                  alt="Simple Vedas"
                  className="w-full h-full max-h-[400px] md:max-h-[500px] object-cover md:pt-2 px-4 md:px-0"
                />
    </Box>
  </Box>
</Box>
        
          <hr className = "w-[85%] mx-auto mt-4 border-dotted"></hr>
          {/* Success Stats Section */}
          <Box className="mt-14 mb-1 ">
            <Typography variant="h3" className=" text-center  text-[#1a1a1a] md:pb-4 px-8 ">
                <span className="font-bold md:text-5xl text-3xl" >Our Success Ratio</span>
            </Typography>
            <div className="flex justify-center gap-15  ">
              <div className="w-10 h-[3.5px] bg-gray-200"></div>
              <div className="w-10 h-[3.5px] bg-gray-200"></div>
            </div>
            
            <Typography 
              variant="body1" 
              className="text-[#a81919] md:pb-12 md:pt-8 px-4 pt-4 py-4 text-xs md:text-sm max-w-full mx-auto font-extralight text-center "
            >
              We measure our success through the satisfaction of our students. When they refer someone, we feel elated!
            </Typography>

            <Box className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
              <Grid container spacing={{ xs: 3, md: 5 }} className="w-full justify-around mb-12 ">
                {/* Happy Students */}
                <Grid item xs={12} sm={4}>
                  <Box className="text-center p-6 md:p-8 h-[280px] md:h-[300px] flex flex-col justify-between items-center border-2 border-dotted border-gray-300 rounded-lg bg-white transition-all duration-300 hover:border-[#F5A623] hover:shadow-[0_4px_12px_rgba(245,166,35,0.2)] group">
                    <Box className="h-[70px] md:h-[80px] flex items-center justify-center relative">
                      <Box className="circle-border absolute w-[90px] md:w-[100px] h-[90px] md:h-[100px] rounded-full border-[3px] border-[#F5A623] opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100" />
                      <People className="text-[60px] md:text-[70px] text-[#F5A623] z-10 relative" />
                    </Box>
                    <Box className="flex-1 flex flex-col justify-center items-center gap-0">
                      <Typography variant="h3" className="font-extralight text-[#F5A623] text-3xl md:text-4xl leading-none mb-4 ">
                        <strong>12966+</strong>
                      </Typography>
                      <Box className="underline w-[50px] h-[3px] bg-[#1a1a1a] mb-4 rounded-sm transition-colors duration-300 group-hover:bg-[#F5A623]" />
                      <Typography variant="h6" className="font-extralight text-sm md:text-base text-[#1a1a1a] leading-tight">
                        <strong>Happy Students</strong>
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* Classes Completed */}
                <Grid item xs={12} sm={4}>
                  <Box className="text-center p-6 md:p-8 h-[280px] md:h-[300px] flex flex-col justify-between items-center border-2 border-dotted border-gray-300 rounded-lg bg-white transition-all duration-300 hover:border-[#F5A623] hover:shadow-[0_4px_12px_rgba(245,166,35,0.2)] group">
                    <Box className="h-[70px] md:h-[80px] flex items-center justify-center relative">
                      <Box className="circle-border absolute w-[90px] md:w-[100px] h-[90px] md:h-[100px] rounded-full border-[3px] border-[#F5A623] opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100" />
                      <EmojiEvents className="text-[60px] md:text-[70px] text-[#F5A623] z-10 relative" />
                    </Box>
                    <Box className="flex-1 flex flex-col justify-center items-center gap-0">
                      <Typography variant="h3" className="font-extralight text-[#F5A623] text-3xl md:text-4xl leading-none mb-4">
                        <strong>822+</strong>
                      </Typography>
                      <Box className="underline w-[50px] h-[3px] bg-[#1a1a1a] mb-4 rounded-sm transition-colors duration-300 group-hover:bg-[#F5A623]" />
                      <Typography variant="h6" className="font-extralight text-sm md:text-base text-[#1a1a1a] leading-tight">
                        <strong>Classes Completed</strong>
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* Courses Available */}
                <Grid item xs={12} sm={4}>
                  <Box className="text-center p-6 md:p-8 h-[280px] md:h-[300px] flex flex-col justify-between items-center border-2 border-dotted border-gray-300 rounded-lg bg-white transition-all duration-300 hover:border-[#F5A623] hover:shadow-[0_4px_12px_rgba(245,166,35,0.2)] group">
                    <Box className="h-[70px] md:h-[80px] flex items-center justify-center relative">
                      <Box className="circle-border absolute w-[90px] md:w-[100px] h-[90px] md:h-[100px] rounded-full border-[3px] border-[#F5A623] opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100" />
                      <MenuBook className="text-[60px] md:text-[70px] text-[#F5A623] z-10 relative" />
                    </Box>
                    <Box className="flex-1 flex flex-col justify-center items-center gap-0">
                      <Typography variant="h3" className="font-extralight text-[#F5A623] text-3xl md:text-4xl leading-none mb-4">
                        <strong>20+</strong>
                      </Typography>
                      <Box className="underline w-[50px] h-[3px] bg-[#1a1a1a] mb-4 rounded-sm transition-colors duration-300 group-hover:bg-[#F5A623]" />
                      <Typography variant="h6" className=" text-sm md:text-base text-[#1a1a1a] leading-tight ">
                        <strong>Courses Available</strong>
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
          </>
        );
      
      case "srila-prabhupada":
        return (
          <>
            <PageHeader backgroundImage={abouth} title="SRILA PRABHUPADA" />

            <Box className=" w-full max-w-[1200px] mx-auto px-4 md:px-8  rounded-lg p-6">
              {/* Main Content */}
              <Box className="md:pt-16 md:pb-8 px-8 md:px-0">
  <Typography 
    variant="h3" 
    className="text-2xl md:text-4xl lg:text-5xl text-[#1a1a1a] md:pl-3 pt-2 pb-4 font-bold text-left"
  >
    <Box component="span" className="block font-bold">HIS DIVINE GRACE</Box> 
    <Box component="span" className="block text-[#ffc13c] font-bold mt-2">
      SRILA PRABHUPADA
    </Box>
  </Typography>

  <Box className="w-16 md:w-20 h-1 bg-[#ffc13c] md:ml-3 mb-6" />

  <Typography 
    variant="h6" 
    className="text-left pb-12 md:pl-4 text-black font-bold text-xs md:text-sm lg:text-base"
  >
    <span className="uppercase">
      Founder-acharya of International Society for Krishna Consciousness
    </span>
  </Typography>
</Box>

                {/* Image and Introduction */}
                <Box className="flex flex-col-reverse px-4 md:flex-row gap-8 mb-10 rounded-lg md:p-0 items-stretch">
                  {/* Text on Left (appears second on mobile, first on desktop) */}
                  <Box className="flex-1 min-w-0 p-0 flex flex-col">
                    <Typography variant="body1" className="text-justify text-xs md:text-sm text-black p-4 mb-2 [word-spacing:0.15em]">
                      <p className="leading-[1.8] [word-spacing:0.2em]">Srila Prabhupada – At various times people have called him a scholar, a philosopher, a cultural ambassador, a prolific author, a religious leader, a spiritual teacher, a social critic, and a holy man. In truth, he was all these things and more.</p>
                    </Typography>

                    <Typography variant="body1" className="p-4 text-justify leading-[1.9] [word-spacing:0.15em] text-xs md:text-sm text-black font-extralight mb-4">
                      <p className="leading-[1.8] [word-spacing:0.2em]">He is regarded as the world's pre-eminent exponent of the teachings and practices of <span className="font-bold text-[1.05em]">Bhakti-yoga</span> and Vedic Knowledge, outside of its roots in India. We invite you to know a little more about him;</p>
                    </Typography>

                    {/* A Lifetime of Preparation */}
                    <Typography variant="h4" className="p-4 font-extralight mb-4 pt-5 pb-10 text-base md:text-xl text-black inline-block">
                      <span className="font-bold text-3xl">A Lifetime of Preparation:</span>
                    </Typography>
                    
                    <Typography variant="body1" className="p-4 text-justify leading-[1.9] text-xs md:text-sm [word-spacing:0.15em] text-black font-extralight mb-2">
                      <p className="leading-[1.8] [word-spacing:0.2em]">Born as Abhay Charan De on September 1, 1896, in Calcutta, as a young man he joined Mahatma Gandhi's civil disobedience movement. In 1922, a meeting with the prominent scholar and spiritual leader, Srila Bhaktisiddhanta Sarasvati, proved to be most influential on young Abhay's future calling.</p>
                    </Typography>

                    <Typography variant="body1" className="p-4 text-justify leading-[1.9] [word-spacing:0.15em] text-xs md:text-sm text-black font-extralight">
                      <p className="leading-[1.8] [word-spacing:0.2em]">Srila Bhaktisiddhanta was a leader in the <span className="font-bold text-[1.05em]">Gaudiya Vaishnava</span> community, a monotheistic tradition within the broader Hindu culture. At their very first meeting, Srila Bhaktisiddhanta asked Abhay to bring the teachings of Lord Krishna to the English-speaking world. Deeply moved by his devotion and wisdom, Abhay became a disciple of Srila Bhaktisiddhanta in 1933, and resolved to carry out his mentor's request. Abhay, later known by the honorific A.C. Bhaktivedanta Swami Prabhupada, spent the next 32 years preparing for his journey west.</p>
                    </Typography>
                  </Box>

                  {/* Image on Right (appears first on mobile, second on desktop) */}
                  <Box className="w-full md:w-auto md:flex-1 flex rounded justify-center items-start min-w-0">
                    <img
                      src={srilaPrabhupadaImg}
                      alt="Srila Prabhupada"
                      className="md:pt-3 px-4"
                    />
                  </Box>
                </Box>

                {/* A Historic Voyage */}
                <Box className="mb-8  rounded-lg px-8 md:p-4 ">
                  <Typography variant="h5" className="font-extralight mb-4 text-base md:text-xl text-black  inline-block pb-14">
                    <span className="font-bold text-3xl">A Historic Voyage:</span>
                  </Typography>
                  
                  <Typography variant="body1" className="[word-spacing:0.15em]  text-justify leading-[1.9] text-xs md:text-sm text-black font-extralight ">
                    <p className="leading-[1.8] [word-spacing:0.2em]">In 1965, at the age of 69, Srila Prabhupada travelled to New York City aboard a cargo ship. The journey was treacherous, and the elderly spiritual teacher suffered 2 heart attacks aboard ship. Arriving in the United States with just 7 dollars in Indian rupees and his translations of sacred Sanskrit texts, he began to spread the teachings of Krishna consciousness. His spiritual message resonated with many young people, some of whom came forward to become serious students of the Krishna tradition. With the help of these students, Srila Prabhupada rented a small storefront on New York's Lower East Side to use as a temple.</p>
                  </Typography>
                </Box>

                {/* A World Acharya */}
                <Box className="px-8 mb-8 rounded-lg md:p-4 leading-[1.8] [word-spacing:0.15em]">
                  <Typography variant="h5" className="font-extralight mb-4 pb-13 text-base md:text-xl text-black  inline-block ">
                    <span className="font-bold text-3xl">A World Acharya:</span>
                  </Typography>
                  
                  <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-black  mb-2 font-extrabold">
                    <p className="pb-2 leading-[1.8] mb-1.5 [word-spacing:0.2em]">In July of 1966, Bhaktivedanta Swami established the International Society for Krishna Consciousness (ISKCON) for the purpose he stated of <span className="font-bold text-[1.05em]">"checking the imbalance of values in the world and working for real unity and peace".</span>
                    </p>
                  </Typography>

                  <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-black font-extralight mb-2">
                    <p className="pb-2 leading-[1.8] mb-1.5 [word-spacing:0.2em]">In the eleven years that followed, Srila Prabhupada circled the globe 14 times on lecture tours spreading the teachings of Lord Krishna. Men and women from all backgrounds and walks of life came forward to accept his message. With their help, Srila Prabhupada established temples, farm communities, a publishing house, and educational institutions around the world. And, he began what has now become the world's largest vegetarian food relief program, Hare Krishna Food for Life.
                    </p>
                  </Typography>

                  <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-black font-extralight mb-2">
                    <p className="pb-2 leading-[1.8] mb-1.5 [word-spacing:0.2em]">With the desire to nourish the roots of Krishna consciousness in its home, Srila Prabhupada returned to India several times, where he sparked a revival in the <span className="font-bold text-[1.05em]">Vaishnava</span> tradition. In India, he opened dozens of temples, including large centres in the holy towns of Vrindavan and Mayapura.
                    </p>
                  </Typography>

                  <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-black font-extralight">
                    <p className="leading-[1.8] mb-1.5 [word-spacing:0.2em]">Srila Prabhupada's most significant contributions, perhaps, are his books. He authored over 70 volumes on the Krishna tradition, which are highly respected by scholars for their authority, depth, fidelity to the tradition, and clarity. Several of his works are used as textbooks in numerous university courses. His writings have been translated into 76 languages. His most prominent works include: <span className="text-[1.05em] font-bold">Bhagavad-gita As It Is</span>, the 30-volume <span className="text-[1.05em] font-bold">Srimad-bhagavatam</span>, and the 17-volume <span className="font-bold text-[1.05em]">Sri Caitanya-caritamrita</span>.
                    </p>
                  </Typography>
                </Box>

                {/* A Saint never dies */}
                <Box className="md:pb-4  rounded-lg pl-8 pr-4 m-0 md:pr-0 md:pl-4  [word-spacing:0.2em]">
                  <Typography variant="h5" className="font-extralight mb-4 text-base md:text-xl text-black inline-block pb-14 ">
                    <span className="font-bold text-3xl">A Saint never dies:</span>
                  </Typography>
                  
                  <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-black font-extralight mb-2 pr-4">
                    <p className="leading-[1.8] mb-1.5 [word-spacing:0.2em] pb-2">Though Srila Prabhupada passed away on November 14, 1977, in the holy town of Vrindavan, surrounded by his loving disciples and followers, he is still alive in the form of his teachings, and also in the hearts of millions of people who follow him. While he was physically alive, he touched the hearts of many by his wisdom and saintly qualities, and he still continues to inspire us all through his teachings.
                    </p>
                  </Typography>

                  <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-black font-extralight pr-4">
                    <p className="leading-[1.8] mb-1.5 [word-spacing:0.2em] ">For millennia, the teachings of Bhakti had been concealed within Sanskrit and Indian vernacular languages, and the rich culture of Bhakti had been hidden behind the borders of India. However, today, millions around the globe express their gratitude to Srila Prabhupada for revealing the timeless wisdom of Bhakti to a world immersed in a hedonistic and distracted ethos.
                    </p>
                  </Typography>
                </Box>

                {/* Quote */}
                {/* <Box className="bg-[#f9f9f9] border border-[#F5A623] border-l-4 border-l-[#F5A623] p-4 md:p-6 mb-8 rounded"> */}
                <Box className="md:my-8 border-t-2 border-b-2 border-black md:py-6 md:mx-4 mx-8 p">
                  <Typography 
                    variant="body1" 
                    className=" leading-[1.8] text-xs md:text-sm text-[#800000] mb-4 "
                  >
                    <p className="font-bold  text-xl md:py-0 py-6">He was a genuine holy person with enormous integrity and compassion, and he had a powerful impact on those who met him. He never claimed authority and respect for himself; what he said and did was always in the name of Krishna…
                    </p>
                  </Typography>
                </Box>
                  <Typography 
                    variant="body2" 
                    className="text-[0.2rem] md:text-xs text-[#000000] font-extralight px-4 pb-10 pt-10 md:pb-12 flex justify-end"
                  >
                    <p className="text-[1.2em] mx-4 flex flex-col items-end text-right">
                      <span className="pb-3">– Dr. Thomas J. Hopkins,</span>
                      <span>Professor of Religious Studies (Emeritus), Franklin and Marshall College</span>
                    </p>
                  </Typography>
                

                {/* Learn More Link */}
                <Typography 
                  variant="body1" 
                  className=" text-sm md:text-base text-black px-7 md:pb-12 md:pl-4"
                >
                  <p className="font-extrabold">More can be known about his life and activities at{" "} 
                  <Box 
                    component="a" 
                    href="https://www.prabhupada.net/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ff6600] no-underline hover:underline"
                  >
                    https://www.prabhupada.net/
                  </Box>
                  </p>
                  
                </Typography>
                <Box className="relative w-full pb-[56.25%] h-full overflow-hidden my-8 md:my-4 ">
                <iframe
                  className="absolute top-0 left-0 w-full h-full md:px-4 md:py-2 md:pb-20 px-7 "
                  src="https://www.youtube.com/embed/UsoczeYeaY8"
                  title="Srila Prabhupada Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </Box>
            </Box>
          </>
        );
      
      case "our-inspiration":
        return (
          <>
            <PageHeader backgroundImage={abouth} title="OUR INSPIRATION" />

            <Box className="w-full max-w-[1200px] mx-auto pt-4 px-4 md:px-8">
              {/* Gopal Krishna Goswami */}
              <Box className="mb-16 mt-8">
                <Typography 
                  variant="h3" 
                  className="pb-10 text-xl md:text-2xl text-[#1a1a1a] px-4 md:px-0 md:pl-8 md:pt-12 md:pb-18"
                >
                  <Box className="flex flex-wrap items-center gap-4 px-4">
                    <Box className="font-bold">
                      <span className="whitespace-nowrap">HIS HOLINESS</span>{" "}
                      <Box component="span" className="text-[#ffc13c] max-[750px]:block">
                        GOPAL KRISHNA GOSWAMI
                      </Box>
                    </Box>
                    <Box className="w-16 h-1 bg-[#ffc13c]" />
                  </Box>
                </Typography>

                <Box className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 md:pl-8">
                  <Box className="flex-1 md:flex-[0_0_62%] px-4 md:px-0">
                    <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-black font-extralight mb-6 [word-spacing:0.15em]">
                      <p className="leading-[1.8] [word-spacing:0.2em] pb-3">
                        His Holiness Gopal Krishna Goswami Maharaj was a senior disciple of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada. He played a leading role in spreading the divine message of Bhagavad-gita As It Is. He graduated from Delhi University, and studied Business Management at the University of Paris in Sorbonne and later obtained his Master's degree in Business Administration from the McGill University of Montreal, Canada.
                      </p>
                    </Typography>

                    <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-black font-extralight [word-spacing:0.15em]">
                      <p className="leading-[1.8] [word-spacing:0.2em]">
                        Maharaja was ISKCON GBC (Governing Body Commissioner) of over thirty temples around the world and served as an initiating spiritual master, with thousands of disciples in Russia, America, Canada, Europe, Asia, Africa, Australia and New Zealand. Also, he was the Chairman and Trustee of the Bhaktivedanta Book Trust, the world's largest publisher and distributor of Vedic literature.
                      </p>
                    </Typography>
                  </Box>

                  <Box className="flex-1 md:flex-[0_0_30%] flex justify-center items-start px-4 md:px-0">
                    <Box
                      component="img"
                      src="https://i0.wp.com/simplevedas.com/wp-content/uploads/2022/02/His-Holiness-Gopal-Krishna-Goswami-Maharaja-3.jpg?fit=640%2C640&ssl=1"
                      alt="His Holiness Gopal Krishna Goswami"
                      className="w-full h-auto object-cover"
                    />
                  </Box>
                </Box>
              </Box>

              {/* Bhakti Tirtha Swami */}
              <Box className="mb-16">
                <Typography 
                  variant="h3" 
                  className="pb-10 text-xl md:text-2xl text-[#1a1a1a] px-4 md:px-0 md:pl-8"
                >
                  <Box className="flex flex-wrap items-center gap-4">
                    <Box className="font-bold">
                      HIS HOLINESS <Box component="span" className="text-[#ffc13c]">BHAKTI TIRTHA SWAMI</Box>
                    </Box>
                    <Box className="w-16 h-1 bg-[#ffc13c]" />
                  </Box>
                </Typography>

                <Box className="flex flex-col md:flex-row gap-8 md:gap-16 md:pl-8">
                  <Box className="flex-1 md:flex-[0_0_30%] flex justify-center items-start px-4 md:px-0">
                    <Box
                      component="img"
                      src="https://i0.wp.com/simplevedas.com/wp-content/uploads/2023/02/BT-Swami.jpg?fit=640%2C640&ssl=1"
                      alt="His Holiness Bhakti Tirtha Swami"
                      className="w-full h-auto object-cover"
                    />
                  </Box>

                  <Box className="flex-1 md:flex-[0_0_62%] px-4 md:px-0">
                    <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-black font-extralight mb-6 [word-spacing:0.15em]">
                      <p className="leading-[1.8] [word-spacing:0.2em] pb-3">
                        His Holiness Bhakti Tirtha Swami was born John E. Favors in a pious, God-fearing family. He graduated from Princeton University and was then a leader in Dr. Martin Luther King Jr's civil rights movement. He was a charismatic spiritual leader who was known for his eclectic and dynamic preaching strategies. Widely acknowledged as a global specialist in international relations and conflict resolution, he became a spiritual consultant to many high-ranking members of the United Nations, celebrities, chiefs and kings around the world.
                      </p>
                    </Typography>

                    <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-black font-extralight [word-spacing:0.15em]">
                      <p className="leading-[1.8] [word-spacing:0.2em]">
                        He authored many books on leadership, practical spirituality, & his reflections on great holy scriptures. His passing away from this world was like his life, a deep expression of love and compassion, and a lesson for all of us. A lot more can be read about him in his official biography Black Lotus: The Spiritual Journey of an Urban Mystic.
                      </p>
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Bhakti Dhira Damodara Swami */}
              <Box className="mb-16">
                <Typography 
                  variant="h3" 
                  className="pb-10 text-xl md:text-2xl text-[#1a1a1a] px-4 md:px-0 md:pl-8 md:pt-16"
                >
                  <Box className="flex flex-wrap items-center gap-4">
                    <Box className="font-bold">
                      HIS HOLINESS <Box component="span" className="text-[#ffc13c]">BHAKTI DHIRA DAMODARA SWAMI</Box>
                    </Box>
                    <Box className="w-16 h-1 bg-[#ffc13c]" />
                  </Box>
                </Typography>

                <Box className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 md:pl-8">
                  <Box className="flex-1 md:flex-[0_0_62%] px-4 md:px-0">
                    <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-black font-extralight mb-6 [word-spacing:0.15em]">
                      <p className="leading-[1.8] [word-spacing:0.2em] ">
                        His Holiness Bhakti Dhira Damodara Swami Maharaja, the first African <span className="font-bold text-[1.05em]">sannyasi</span> and <span className="font-bold text-[1.05em]">diksha-guru</span> in ISKCON, is a grand-disciple of His Divine Grace A.C. Bhaktivedanta Swami Prabhupada. He is known and appreciated for his humility, gravity and deep knowledge. He tours and preaches extensively in different countries in Africa, in Brazil, India, Mauritius, the Seychelles and the United States.
                      </p>
                    </Typography>

                    <Typography variant="body1" className="text-justify leading-[1.9] text-xs md:text-sm text-black font-extralight [word-spacing:0.15em]">
                      <p className="leading-[1.8] [word-spacing:0.2em]">
                        He also regularly teaches <span className="font-bold text-[1.05em]">Bhakti-śāstrī</span> and <span className="font-bold text-[1.05em]">Bhakti-vaibhava</span> courses at the Vrindavan Institute of Higher Education (VIHE) and the Mayapur Institute (MI) and facilitates numerous seminars on the practical aspects of Krishna consciousness philosophy, such as community-building, self-sufficiency, etc. Following the desire of his spiritual master, Maharaja is also developing vibrant Krishna conscious self-sustainable farm communities in Ghana and Nigeria, Africa.
                      </p>
                    </Typography>
                  </Box>

                  <Box className="flex-1 md:flex-[0_0_30%] flex justify-center items-start px-4 md:px-0">
                    <Box
                      component="img"
                      src="https://i0.wp.com/simplevedas.com/wp-content/uploads/2022/02/Bhakti-Dhira-Damodara-Swami.jpeg?fit=640%2C640&ssl=1"
                      alt="His Holiness Bhakti Dhira Damodara Swami"
                      className="w-full h-auto object-cover"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        );
        case "madhusudan-visnu-dev":
          return (
            <>
              <PageHeader backgroundImage={abouth} title="MADHUSUDANA VISNU DAS" className=""/>

              <Box className="w-full max-w-[1200px] mx-auto px-4 md:px-8 mt-24 pb- ">
                {/* Main Title */}
                <Typography 
                  variant="h3" 
                  className="font-bold  md:mt-8 md:pl-4 md:mb-2  text-2xl md:text-[2.2rem] text-[#1a1a1a]"
                >
                  <p className="font-bold flex flex-wrap items-center">
                    <span>MADHUSUDANA VISNU</span>
                    <Box component="span" className="text-[#ffc13c] max-[750px]:basis-full">
                      DAS
                    </Box>
                    <Box 
                      component="span" 
                      className="flex-grow h-[3px] bg-[#ffc13c]"
                      sx={{ maxWidth: '80px' }}
                    />
                  </p>
                </Typography>
                                
                <Typography 
                  variant="h6" 
                  className="pb-18 pl-4 text-md text-black md:text-base  uppercase"
                >
                  <p className="font-bold text-md">
                  Bhakti-yogi, Monk, Teacher, Writer, and Spiritual Lifestyle Coach
                  </p>
                </Typography>

                {/* Content Layout */}
                <Box className="flex flex-col md:flex-row gap-8 mb-10">
                  {/* Image on Left */}
                  <Box className="flex-1 md:flex-[0_0_35%] flex justify-center items-start">
                    <Box
                      component="img"
                      src={madhusudanaVisnuDasImg}
                      alt="Madhusudana Visnu Das"
                      className="w-[340px] h-auto object-cover "
                    />
                  </Box>

                  {/* Tabs on Right */}
                  <Box className="flex-1 md:flex-[0_0_60%]">
                    <Box className="border-b border-gray-300">
                      <Tabs 
                        value={tabValue} 
                        onChange={handleTabChange}
                        className="[&_.MuiTab-root]:text-xs md:[&_.MuiTab-root]:text-sm [&_.MuiTab-root]:font-extralight [&_.MuiTab-root]:text-[#666] [&_.MuiTab-root.Mui-selected]:text-[#F5A623] [&_.MuiTabs-indicator]:bg-[#F5A623] "
                      >
                        <Tab label="About Me" />
                        <Tab label="Experience" />
                        <Tab label="Contact" />
                      </Tabs>
                    </Box>

                    {/* Tab Panel 0 - About Me */}
                    {tabValue === 0 && (
                      <Box className="py-6">
                        <Box
                          component="ul"
                          style={{ listStyleType: 'square' }}
                          className="text-justify leading-[1.9] text-xs md:text-sm text-black font-extralight  pl-6 [&>li]:mb-3 [&>li]:leading-[1.8] [&>em]:italic "
                        >
                          <div className="text-[1.15em] leading-[2.4]">
<li>Graduated as B. Tech in Computer Engineering from SVNIT, Surat (2007-11);</li>
<li>Had a great break in TCS (Tata Consultancy Services) on graduation;</li>
<li>Worked as an Academic Instructor in Mumbai for 4 years;</li>
<li><span className="font-bold text-[1.05em]">Bhakti-yogi</span> since 2008, Monk since 2016;</li>
<li>Studied <span className="font-bold text-[1.05em]">Bhakti-sastri</span> at VIHE, Vrindavan;</li>
<li>At present a teacher at reputed institutes such as VIHE (Vrindavan Institute for Higher Education), IBMV (ISKCON Bhagavat Mahavidyalaya);</li>
<li>Director at Simple Vedas.</li>
                          </div>
                        </Box>
                      </Box>
                    )}

                    {/* Tab Panel 1 - Experience */}
                    {tabValue === 1 && (
                      <Box className="py-6">
                        <Box
                          component="ul"
                          style={{ listStyleType: 'square' }}
                          className="text-justify leading-[1.9] pb-4 text-xs md:text-sm text-black font-extralight list-outside pl-6 [&>li]:mb-3 [&>li]:leading-[1.8]"
                        >
                          <div className="text-[1.15em] leading-[2.4]">
<li>Have been teaching since age 16;</li>
                          <li>Given numerous seminars in schools, colleges & universities;</li>
<li>Have conducted value-based teacher training programs;</li>
<li>In the last couple of years, have reached out to thousands of people all across the globe through insightful quotes, seminars, and courses.</li>
                          </div>
                        </Box>

                        <Typography 
                          variant="body1" 
                          className="text-justify leading-[1.9] text-xs md:text-sm text-black font-extralight mt-6 mb-4 pb-4 px-2"
                        >
                          My sutra for teaching is:
                        </Typography>

                        <Box className="border-y-2 py-4 ml-2">
                          <Typography 
                            variant="body1" 
                            className="font-extralight leading-[1.8] text-xs md:text-sm text-orange-500"
                          >
                              <p className="font-extrabold text-lg my-2" >
                            "It should be simple, interesting, insightful, inspiring and most importantly authentic."
                            </p>
                          </Typography>
                        </Box>
                      </Box>
                    )}

                    {/* Tab Panel 2 - Contact */}
                    {tabValue === 2 && (
                      <Box className="py-6">
                        <Grid container spacing={3}>
                          <Grid item xs={12} md={6}>
                            <Box className="flex items-center gap-4 mb-6">
                              <Phone className="text-[#F5A623] text-[30px]" />
                              <Typography className="text-xs md:text-sm font-extralight">
                                +91 9987318251
                              </Typography>
                            </Box>
                            
                            <Box className="flex items-center gap-4 mb-6">
                              <Email className="text-[#F5A623] text-[30px]" />
                              <Typography className="text-xs md:text-sm font-extralight">
                                mvdas@simplevedas.com
                              </Typography>
                            </Box>
                            
                            <Box className="flex items-start gap-4 mb-6">
                              <Schedule className="text-[#F5A623] text-[30px]" />
                              <Box>
                                <Typography className="text-xs md:text-sm font-extralight">
                                  Mon – Fri: 10 am to 7 pm
                                </Typography>
                                <Typography className="text-xs md:text-sm font-extralight">
                                  Sat – Sun: 10 am to 3 pm
                                </Typography>
                              </Box>
                            </Box>
                          </Grid>

                          <Grid item xs={12} md={6}>
                            <Typography 
                              variant="h6" 
                              className="font-extralight mb-4 text-sm md:text-base"
                            >
                              Follow Me
                            </Typography>
                            
                            <Box className="flex gap-4">
                              <Box
                                component="a"
                                href="https://www.youtube.com/channel/UC0K7NJqAQZ7XE3E-fl9DGlQ/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F5A623] text-white no-underline transition-all duration-300 hover:bg-[#e09515] hover:scale-110"
                              >
                                <Typography className="text-base font-extralight">Y</Typography>
                              </Box>
                              
                              <Box
                                component="a"
                                href="https://www.facebook.com/madhusudana.visnu.das/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F5A623] text-white no-underline transition-all duration-300 hover:bg-[#e09515] hover:scale-110"
                              >
                                <Typography className="text-base font-extralight">F</Typography>
                              </Box>
                              
                              <Box
                                component="a"
                                href="https://www.instagram.com/madhusudanavisnudas/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F5A623] text-white no-underline transition-all duration-300 hover:bg-[#e09515] hover:scale-110"
                              >
                                <Typography className="text-base font-extralight">I</Typography>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    )}
                  </Box>
                </Box>

                {/* Stats Section */}
                <Box className="mt-16 mb-12">
                  <Grid container spacing={{ xs: 3, md: 5 }} className="justify-evenly">
                    {/* Batches Taught */}
                    <Grid item xs={6} sm={3}>
                      <Box className="text-center p-6 md:p-8 h-[280px] md:h-[300px] flex flex-col justify-between items-center border-2 border-dotted border-gray-300 rounded-lg bg-white transition-all duration-300 hover:border-[#F5A623] hover:shadow-[0_4px_12px_rgba(245,166,35,0.2)] group">
                        <Box className="h-[70px] md:h-[80px] flex items-center justify-center relative">
                          <Box className="circle-border absolute w-[90px] md:w-[100px] h-[90px] md:h-[100px] rounded-full border-[3px] border-[#F5A623] opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100" />
                          <School className="text-[60px] md:text-[70px] text-[#F5A623] z-10 relative" />
                        </Box>
                        <Box className="flex-1 flex flex-col justify-center items-center gap-0">
                          <Typography variant="h3" className="font-extralight text-[#F5A623] text-3xl md:text-4xl leading-none  mb-4">
                            <p className="font-bold">45+</p>
                          </Typography>
                          <Box className="underline w-[50px] h-[3px] bg-[#1a1a1a] mb-4 rounded-sm transition-colors duration-300 group-hover:bg-[#F5A623]" />
                          <Typography variant="h6" className="font-extralight text-sm md:text-base text-[#1a1a1a] leading-tight ">
                            Batches Taught
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Happy Students */}
                    <Grid item xs={6} sm={3}>
                      <Box className="text-center p-6 md:p-8 h-[280px] md:h-[300px] flex flex-col justify-between items-center border-2 border-dotted border-gray-300 rounded-lg bg-white transition-all duration-300 hover:border-[#F5A623] hover:shadow-[0_4px_12px_rgba(245,166,35,0.2)] group">
                        <Box className="h-[70px] md:h-[80px] flex items-center justify-center relative">
                          <Box className="circle-border absolute w-[90px] md:w-[100px] h-[90px] md:h-[100px] rounded-full border-[3px] border-[#F5A623] opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100" />
                          <People className="text-[60px] md:text-[70px] text-[#F5A623] z-10 relative" />
                        </Box>
                        <Box className="flex-1 flex flex-col justify-center items-center gap-0">
                          <Typography variant="h3" className="font-extralight text-[#F5A623] text-3xl md:text-4xl leading-none mb-4">
                            <p className="font-bold">12966+</p>
                          </Typography>
                          <Box className="underline w-[50px] h-[3px] bg-[#1a1a1a] mb-4 rounded-sm transition-colors duration-300 group-hover:bg-[#F5A623]" />
                          <Typography variant="h6" className="font-extralight text-sm md:text-base text-[#1a1a1a] leading-tight">
                            Happy Students
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Talks & Lectures */}
                    <Grid item xs={6} sm={3}>
                      <Box className="text-center p-6 md:p-8 h-[280px] md:h-[300px] flex flex-col justify-between items-center border-2 border-dotted border-gray-300 rounded-lg bg-white transition-all duration-300 hover:border-[#F5A623] hover:shadow-[0_4px_12px_rgba(245,166,35,0.2)] group">
                        <Box className="h-[70px] md:h-[80px] flex items-center justify-center relative">
                          <Box className="circle-border absolute w-[90px] md:w-[100px] h-[90px] md:h-[100px] rounded-full border-[3px] border-[#F5A623] opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100" />
                          <EmojiEvents className="text-[60px] md:text-[70px] text-[#F5A623] z-10 relative" />
                        </Box>
                        <Box className="flex-1 flex flex-col justify-center items-center gap-0">
                          <Typography variant="h3" className="font-extralight text-[#F5A623] text-3xl md:text-4xl leading-none mb-4">
                            <p className="font-bold">882+</p>
                          </Typography>
                          <Box className="underline w-[50px] h-[3px] bg-[#1a1a1a] mb-4 rounded-sm transition-colors duration-300 group-hover:bg-[#F5A623]" />
                          <Typography variant="h6" className="font-extralight text-sm md:text-base text-[#1a1a1a] leading-tight">
                            Talks & Lectures
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Hours of Content */}
                    <Grid item xs={6} sm={3}>
                      <Box className="text-center p-6 md:p-8 h-[280px] md:h-[300px] flex flex-col justify-between items-center border-2 border-dotted border-gray-300 rounded-lg bg-white transition-all duration-300 hover:border-[#F5A623] hover:shadow-[0_4px_12px_rgba(245,166,35,0.2)] group">
                        <Box className="h-[70px] md:h-[80px] flex items-center justify-center relative">
                          <Box className="circle-border absolute w-[90px] md:w-[100px] h-[90px] md:h-[100px] rounded-full border-[3px] border-[#F5A623] opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100" />
                          <MenuBook className="text-[60px] md:text-[70px] text-[#F5A623] z-10 relative" />
                        </Box>
                        <Box className="flex-1 flex flex-col justify-center items-center gap-0">
                          <Typography variant="h3" className="font-extralight text-[#F5A623] text-3xl md:text-4xl leading-none mb-4">
                            <p className="font-bold">650+</p>
                          </Typography>
                          <Box className="underline w-[50px] h-[3px] bg-[#1a1a1a] mb-4 rounded-sm transition-colors duration-300 group-hover:bg-[#F5A623]" />
                          <Typography variant="h6" className="font-extralight text-sm md:text-base text-[#1a1a1a] leading-tight">
                            Hours of Content
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </>
          )
      default:
        return null;
    }
  };
    
  return (
    <div>
      {getContent()}
      <NewsLetter />
    </div>
  );
}