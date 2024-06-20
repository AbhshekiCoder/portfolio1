function About({profile1}){
    return(
        <>
        <div className="w-full  flex justify-center items-center About" style={{backgroundColor: profile1 == 'white'?'white':'black', color: profile1 == 'white'?'black':'white'}}>
        <div className="about">
        <div className="about1" data-aos = "fade-right">
            <h1> About Me</h1>
            <div className="mt-3">Hello! I'm Abhishek, a passionate and dedicated web developer with a knack for crafting clean, responsive, and user-friendly websites. My journey in web development began  3 years ago, and since then, I've honed my skills and expertise to create dynamic and engaging online experiences.</div>
        </div>
        <div className="about1 mt-14" data-aos = "fade-left">
            <h1> My Background</h1>
            <div className="mt-3">I hold a B.Tech Degree in CSE  from LNCT , where I developed a solid foundation in computer science and web technologies. Over the years, I've worked on a diverse range of projects, from small business websites to complex web applications, constantly pushing the boundaries of what's possible on the web..</div>
        </div>

        <div className="about1 mt-14" data-aos = "fade-right">
            <h1> What I do</h1>
            <div className="mt-3">I specialize in both front-end and back-end development, making me a versatile developer capable of handling a wide array of tasks. My skill set includes:

Front-End Development: HTML, CSS, JavaScript, React, Angular, Vue.js
Back-End Development: Node.js, Express, Django, Ruby on Rails, PHP
Database Management: MySQL, PostgreSQL, MongoDB
Version Control: Git, GitHub, GitLab
DevOps: Docker, CI/CD, AWS</div>
        </div>



        </div>
        
        </div>

        </>
    )
}
export default About;