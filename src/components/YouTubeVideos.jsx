import React from 'react';

const YouTubeVideos = () => {
  const videoList = [
    {
      title: 'The Dark Truth of India’s Digital Revolution (1991-2026) ⚡',
      id: '9FSEOSHBUt8',
      desc: 'Analyzing the transition, growth, and socio-economic challenges of India\'s rapid digital expansion over the last three decades.',
    },
    {
      title: 'CIA Plot or Accident? The Truth Behind Homi Bhabha’s Death ✈️',
      id: 'qeLS9BtXmY0',
      desc: 'A deep-dive investigation into the mysterious 1966 crash of Air India Flight 101 carrying the father of India\'s nuclear program.',
    },
    {
      title: 'Kya Bhoot Sach Mein Hote Hain? The Dark Reality of Demonic Possession 🧠',
      id: 'hU1i9GgGWKc',
      desc: 'An exploration into the psychological, scientific, and cultural aspects of demonic possession and beliefs about the paranormal.',
    },
    {
      title: 'The $1 Billion Mystery: Mona Lisa Itni Famous Kyun Hai? 🤯',
      id: 'f5Pf29vcWoc',
      desc: 'Uncovering the history, art history, and famous theft that transformed Leonardo da Vinci\'s painting into the most famous artwork in the world.',
    },
    {
      title: 'The Mount Kailash Mystery: Kyun Koi Yahan Nahi Chadh Paya? 🏔️',
      id: 'vEDSZa2Jbww',
      desc: 'Investigating the spiritual significance, physical challenges, and unexplained mysteries surrounding Tibet\'s sacred Mount Kailash.',
    },
    {
      title: 'The Dark History of Communism: Ideology vs Reality 🛠️',
      id: 'AjIPLtulK_Q',
      desc: 'A balanced historical analysis of communism, examining the core theoretical ideology versus its real-world implementation throughout history.',
    },
  ];

  return (
    <section id="videos">
      <div className="section-title-wrapper">
        <p className="section-subtitle">Content Creation</p>
        <h2 className="section-title">Featured Videos</h2>
      </div>

      <div className="videos-grid">
        {videoList.map((video, index) => (
          <div key={index} className="glass-card video-card">
            <div className="video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-info">
              <h3 className="video-card-title">{video.title}</h3>
              <p className="video-desc">{video.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="videos-cta">
        <a
          href="https://www.youtube.com/@HardikSrivastavaPresents"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-youtube-subscribe"
        >
          🕹️ Visit My YouTube Channel
        </a>
      </div>
    </section>
  );
};

export default YouTubeVideos;
