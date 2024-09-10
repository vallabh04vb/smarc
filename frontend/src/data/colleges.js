// data/colleges.js
const colleges = [
  {
    value: 'Katuri Medical College, Guntur',
    label: 'Katuri Medical College, Guntur',
  },
  { value: 'GMC, Guntur', label: 'GMC, Guntur' },
  {
    value: 'NRI Academy of Medical Sciences, Mangalagiri',
    label: 'NRI Academy of Medical Sciences, Mangalagiri',
  },
  { value: 'AIIMS, Mangalagiri', label: 'AIIMS, Mangalagiri' },
  { value: 'PSIMS, Vijayawada', label: 'PSIMS, Vijayawada' },
  {
    value: 'Siddartha Medical College, Vijayawada',
    label: 'Siddartha Medical College, Vijayawada',
  },
  {
    value: 'NIMRA Institute of Medical Sciences, Vijayawada',
    label: 'NIMRA Institute of Medical Sciences, Vijayawada',
  },
  {
    value: 'Apollo Institute of Medical Sciences and Research, Chittoor',
    label: 'Apollo Institute of Medical Sciences and Research, Chittoor',
  },
  {
    value: 'PES Institute of Medical Sciences and Research, Kuppam',
    label: 'PES Institute of Medical Sciences and Research, Kuppam',
  },
  { value: 'GMC, Ananthapur', label: 'GMC, Ananthapur' },
  {
    value: 'Narayana Medical College, Nellore',
    label: 'Narayana Medical College, Nellore',
  },
  { value: 'GMC, Ongole', label: 'GMC, Ongole' },
  {
    value: 'Fathima Institute of Medical Sciences, Kadapa',
    label: 'Fathima Institute of Medical Sciences, Kadapa',
  },
  { value: 'GMC, Kadapa', label: 'GMC, Kadapa' },
  {
    value: 'Kurnool Medical College, Kurnool',
    label: 'Kurnool Medical College, Kurnool',
  },
  {
    value: 'Viswabarathi Medical College, Kurnool',
    label: 'Viswabarathi Medical College, Kurnool',
  },
  {
    value: 'Santhiram Medical College, Nandyal',
    label: 'Santhiram Medical College, Nandyal',
  },
  {
    value: 'Sri Venkateshwara Institute Medical Sciences, Tirupati',
    label: 'Sri Venkateshwara Institute Medical Sciences, Tirupati',
  },
  {
    value: 'Sri Venkateshwara Medical College, Tirupati',
    label: 'Sri Venkateshwara Medical College, Tirupati',
  },
  {
    value: 'Sri Balaji Medical College and Hospital, Tirupati',
    label: 'Sri Balaji Medical College and Hospital, Tirupati',
  },
  {
    value: 'ASRAM Medical College, Eluru',
    label: 'ASRAM Medical College, Eluru',
  },
  { value: 'GMC, Eluru', label: 'GMC, Eluru' },
  { value: 'GMC, Machilipatnam', label: 'GMC, Machilipatnam' },
  {
    value: 'GSL Medical College, Rajamundry',
    label: 'GSL Medical College, Rajamundry',
  },
  {
    value: 'Rangaraya Medical College, Kakinada',
    label: 'Rangaraya Medical College, Kakinada',
  },
  {
    value: 'Gayathri Vidya Parishad Medical College, Vizag',
    label: 'Gayathri Vidya Parishad Medical College, Vizag',
  },
  {
    value: 'NRI Institute of Medical Sciences, Vizag',
    label: 'NRI Institute of Medical Sciences, Vizag',
  },
  {
    value: 'Andhra Medical College, Vizag',
    label: 'Andhra Medical College, Vizag',
  },
  {
    value: 'GITAM Institute of Medical Sciences, Vizag',
    label: 'GITAM Institute of Medical Sciences, Vizag',
  },
  {
    value: 'Great Eastern Medical School, Srikakulam',
    label: 'Great Eastern Medical School, Srikakulam',
  },
  { value: 'RIMS, Srikakulam', label: 'RIMS, Srikakulam' },
  {
    value: 'Maharaja Institute of Medical Sciences, Vizianagaram',
    label: 'Maharaja Institute of Medical Sciences, Vizianagaram',
  },
  { value: 'GMC, Vizianagaram', label: 'GMC, Vizianagaram' },
  { value: 'GMC, Rajamundry', label: 'GMC, Rajamundry' },
  { value: 'GMC, Nandyal', label: 'GMC, Nandyal' },
  {
    value: 'ACSR Government Medical College, Nellore',
    label: 'ACSR Government Medical College, Nellore',
  },

  // New Data
  {
    value: 'Osmania Medical College, Hyderabad',
    label: 'Osmania Medical College, Hyderabad',
  },
  {
    value: 'Gandhi Medical College, Secunderabad',
    label: 'Gandhi Medical College, Secunderabad',
  },
  {
    value: 'Kakatiya Medical College, Warangal',
    label: 'Kakatiya Medical College, Warangal',
  },
  {
    value: 'Rajiv Institute of Medical Sciences, Adilabad',
    label: 'Rajiv Institute of Medical Sciences, Adilabad',
  },
  {
    value: 'Government Medical College, Nizamabad',
    label: 'Government Medical College, Nizamabad',
  },
  {
    value: 'Government Medical College, Mahabubnagar',
    label: 'Government Medical College, Mahabubnagar',
  },
  {
    value: 'ESI Medical College, Sanathnagar, Hyderabad',
    label: 'ESI Medical College, Sanathnagar, Hyderabad',
  },
  {
    value: 'Government Medical College, Siddipet',
    label: 'Government Medical College, Siddipet',
  },
  {
    value: 'Government Medical College, Suryapet',
    label: 'Government Medical College, Suryapet',
  },
  {
    value: 'Government Medical College, Nalgonda',
    label: 'Government Medical College, Nalgonda',
  },
  {
    value: 'Government Medical College, Bhadradri Kothagudem',
    label: 'Government Medical College, Bhadradri Kothagudem',
  },
  {
    value: 'Government Medical College, Mahabubabad',
    label: 'Government Medical College, Mahabubabad',
  },
  {
    value: 'Singareni Institute of Medical Sciences, Ramagundam',
    label: 'Singareni Institute of Medical Sciences, Ramagundam',
  },
  {
    value: 'Government Medical College, Wanaparthy',
    label: 'Government Medical College, Wanaparthy',
  },
  {
    value: 'Government Medical College, Nagarkurnool',
    label: 'Government Medical College, Nagarkurnool',
  },
  {
    value: 'Government Medical College, Sangareddy',
    label: 'Government Medical College, Sangareddy',
  },
  {
    value: 'Government Medical College, Jagityal',
    label: 'Government Medical College, Jagityal',
  },
  {
    value: 'Government Medical College, Mancherial',
    label: 'Government Medical College, Mancherial',
  },
  {
    value: 'Government Medical College, Jangaon',
    label: 'Government Medical College, Jangaon',
  },
  {
    value: 'Government Medical College, Jayashankar Bhupalpally',
    label: 'Government Medical College, Jayashankar Bhupalpally',
  },
  {
    value: 'Government Medical College, Kamareddy',
    label: 'Government Medical College, Kamareddy',
  },
  {
    value: 'Government Medical College, Karimnagar',
    label: 'Government Medical College, Karimnagar',
  },
  {
    value: 'Government Medical College, Khammam',
    label: 'Government Medical College, Khammam',
  },
  {
    value: 'Government Medical College, Kumuram Bheem Asfiabad',
    label: 'Government Medical College, Kumuram Bheem Asfiabad',
  },
  {
    value: 'Government Medical College, Nirmal',
    label: 'Government Medical College, Nirmal',
  },
  {
    value: 'Government Medical College, Rajanna Sircilla',
    label: 'Government Medical College, Rajanna Sircilla',
  },
  {
    value: 'Government Medical College, Vikarabad',
    label: 'Government Medical College, Vikarabad',
  },
  {
    value: 'Apollo Institute of Medical Sciences And Research, Hyderabad',
    label: 'Apollo Institute of Medical Sciences And Research, Hyderabad',
  },
  {
    value: 'Kamineni Academy of Medical Sciences and Research, Hyderabad',
    label: 'Kamineni Academy of Medical Sciences and Research, Hyderabad',
  },
  {
    value: 'Mamata Academy of Medical Sciences, Bachupally',
    label: 'Mamata Academy of Medical Sciences, Bachupally',
  },
  {
    value: 'Mamata Medical College, Khammam',
    label: 'Mamata Medical College, Khammam',
  },
  {
    value: 'C Ananda Rao Institute of Medical Sciences, Karimnagar',
    label: 'C Ananda Rao Institute of Medical Sciences, Karimnagar',
  },
  {
    value: 'Prathima Institute of Medical Sciences, Karimnagar',
    label: 'Prathima Institute of Medical Sciences, Karimnagar',
  },
  {
    value: 'Prathima Relief Institute of Medical Sciences, Warangal',
    label: 'Prathima Relief Institute of Medical Sciences, Warangal',
  },
  {
    value: 'S.V.S Medical College, Mahabubnagar',
    label: 'S.V.S Medical College, Mahabubnagar',
  },
  {
    value: 'MNR Medical College and Hospital, Sangareddy',
    label: 'MNR Medical College and Hospital, Sangareddy',
  },
  {
    value: 'Mediciti Institute of Medical Sciences, Hyderabad',
    label: 'Mediciti Institute of Medical Sciences, Hyderabad',
  },
  {
    value: 'Chalmeda Anand Rao Institute of Medical Sciences, Karimnagar',
    label: 'Chalmeda Anand Rao Institute of Medical Sciences, Karimnagar',
  },
  {
    value: 'Mahavir Institute of Medical Sciences, Vikarabad',
    label: 'Mahavir Institute of Medical Sciences, Vikarabad',
  },
  {
    value: 'RVM Institute of Medical Sciences and Research Center, Siddipet',
    label: 'RVM Institute of Medical Sciences and Research Center, Siddipet',
  },
  {
    value: 'Kamineni Institute of Medical Sciences, Narketpally',
    label: 'Kamineni Institute of Medical Sciences, Narketpally',
  },
  {
    value: 'Shadan Institute of Medical Sciences, Hyderabad',
    label: 'Shadan Institute of Medical Sciences, Hyderabad',
  },
  {
    value: "Dr VRK Women's Medical College, Aziznagar",
    label: "Dr VRK Women's Medical College, Aziznagar",
  },
  {
    value: 'Ayaan Institute of Medical Sciences, Hyderabad',
    label: 'Ayaan Institute of Medical Sciences, Hyderabad',
  },
  {
    value: 'Bhaskar Medical College, Moinabad',
    label: 'Bhaskar Medical College, Moinabad',
  },
  {
    value: 'Maheswara Medical College, Patancheru',
    label: 'Maheswara Medical College, Patancheru',
  },
  {
    value: 'Malla Reddy Institute of Medical Sciences, Hyderabad',
    label: 'Malla Reddy Institute of Medical Sciences, Hyderabad',
  },
  {
    value: 'Malla Reddy Medical College for Women, Hyderabad',
    label: 'Malla Reddy Medical College for Women, Hyderabad',
  },
  {
    value: 'MNR Institute of Medical Sciences, Sangareddy',
    label: 'MNR Institute of Medical Sciences, Sangareddy',
  },
  {
    value: 'TRR Institute of Medical Sciences, Patancheru',
    label: 'TRR Institute of Medical Sciences, Patancheru',
  },
  {
    value: 'Surabhi Institute of Medical Sciences, Siddipet',
    label: 'Surabhi Institute of Medical Sciences, Siddipet',
  },
  {
    value: 'SVS Medical College and Hospital, Yenugonda',
    label: 'SVS Medical College and Hospital, Yenugonda',
  },
  {
    value: 'Mamata Medical College, Khammam',
    label: 'Mamata Medical College, Khammam',
  },
  {
    value: 'Deccan College of Medical Sciences, Hyderabad',
    label: 'Deccan College of Medical Sciences, Hyderabad',
  },
  {
    value: 'TS Medical College',
    label: 'TS Medical College',
  },
  {
    value: 'AIIMS Hyderabad',
    label: 'AIIMS Hyderabad',
  },
  {
    value: 'CMR Institute of Medical Sciences',
    label: 'CMR Institute of Medical Sciences',
  },
];

export const professionOptions = [
  {
    value: 'Student',
    label: 'Student',
  },
  {
    value: 'Doctor',
    label: 'Doctor',
  },
];
export default colleges;

export const Scientific_activities = [
  {
    day: 1,
    session: 'Morning',
    name: 'Gynaecology 1',
    price: 899,
    description: 'Another slot available',
    image: '/image/scientific/Gynaecology.png',
    id: 16,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Obstetrics Workshop</h1>
          </header>
          <section>
            <p>
              "Elevate your Obstetrics skills by our Workshop to gain hands-on
              experience in essential childbirth procedures, from normal and
              breech deliveries to forceps techniques and IUD insertion. Perfect
              for enhancing your practical skills in a supportive environment."
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Normal Vaginal Delivery:</strong> "Master the art of
                delivery through hands-on practice on a lifelike mannequin."
              </li>
              <li>
                <strong>Breech Delivery:</strong> "Gain confidence in managing
                breech presentation training with expert guidance."
              </li>
              <li>
                <strong>IUD Insertion:</strong> "Enhance your contraceptive
                skills with IUD insertion training. Hands-on simulation."
              </li>
              <li>
                <strong>Forceps Delivery:</strong> "Elevate your obstetric
                skills. Join our exclusive forceps delivery workshop."
              </li>
              <li>
                <strong>Per Vaginal Examination:</strong> "Learn essential per
                vaginal examination techniques. Hands-on training in a
                respectful and supportive environment."
              </li>
              <li>
                <strong>LUCINA:</strong> "Experience realistic childbirth
                simulation with Lucina through advanced techniques."
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 999/-
            </p>
            <p>
              <strong>Number of Slots:</strong> 2
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> 19th September 9:00 AM to 1:00 PM
              </li>
              <li>
                <strong>Slot 2:</strong> 21st September 9:00 AM to 1:00 PM
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to enhance your obstetrics skills with hands-on
                experience!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 1,
    session: 'Morning',
    name: 'BPCS 1',
    price: 799,
    description: 'Another slot available',
    image: '/image/scientific/BPCS.png',
    id: 17,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Basic Procedural Clinical Skills</h1>
          </header>
          <section>
            <p>
              Dive into the practical side of medicine with our workshop on
              procedural clinical skills. This workshop covers essential
              procedures like heart sounds, ascitic fluid removal, and lumbar
              puncture techniques. It's ideal for anyone interested in
              developing a solid foundation in clinical procedures.
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Ascitic Tapping:</strong> Let the syringe fill with
                ascitic fluid and your brains with skill.
              </li>
              <li>
                <strong>Lumbar Puncture:</strong> Let us meet hands-on to know
                the ailment hidden in spinal fluid.
              </li>
              <li>
                <strong>Heart Sounds and Murmurs:</strong> Hear the murmurs and
                learn to heal the soul.
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 799/-
            </p>
            <p>
              <strong>Date:</strong> 19th September
            </p>
            <p>
              <strong>Number of Slots:</strong> 2
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> Morning 8:00 AM to 1:00 PM
              </li>
              <li>
                <strong>Slot 2:</strong>
                <ul>
                  <li>Morning 8:00 AM to 10:00 AM</li>
                  <li>Afternoon 2:00 PM to 5:00 PM</li>
                </ul>
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to enhance your clinical skills with hands-on
                experience!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 1,
    session: 'Morning',
    name: 'ENT',
    price: 599,
    description: 'Single slot available',
    image: '/image/scientific/ENT.png',
    id: 18,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>ENT Workshop</h1>
          </header>
          <section>
            <p>
              "Elevate your ENT practice with our comprehensive workshop,
              covering essential procedures like foreign body removal, nasal
              packing, and ear surgery. Learn from experienced faculty and
              network with peers in a supportive and interactive environment."
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Tracheostomy:</strong> "Learn the ins and outs of
                tracheostomy care in our upcoming workshop through live
                demonstration on a mannequin with expert guidance."
              </li>
              <li>
                <strong>Otoscopy:</strong> "Struggling with otoscopy? Our
                hands-on workshop is the solution! Learn from experts, practice
                on a realistic mannequin, and gain the confidence you need."
              </li>
              <li>
                <strong>Ear Surgery:</strong> "Witness the magic of ear surgery
                through our workshop offering exclusive access to live recorded
                surgical footage, where you'll learn advanced techniques,
                witness real-time procedures, and enhance your surgical
                experience."
              </li>
              <li>
                <strong>Nasal Packing:</strong> "Perfect your nasal packing
                technique with our interactive mannequin workshop to gain
                confidence and precision through practical training."
              </li>
              <li>
                <strong>Foreign Body Removal:</strong> "Enhance your clinical
                capabilities and patient care by mastering the delicate
                procedure of foreign body removal through our immersive
                workshop, incorporating practical training with advanced
                mannequin."
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 599/-
            </p>
            <p>
              <strong>Number of Slots:</strong> 1
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> 19th September 9:00 AM to 1:30 PM
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to enhance your ENT skills with hands-on experience!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 1,
    session: 'Morning',
    name: 'ECG',
    price: 199,
    description: 'Single slot available',
    image: '/image/scientific/ECG.png',
    id: 19,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>ECG Workshop 🫀</h1>
          </header>
          <section>
            <p>
              "Uncover the rhythms of the heart! Learn the fundamentals of ECG
              interpretation and unlock the secrets of cardiac diagnosis in our
              interactive workshop."
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>ECG Interpretation for Undergraduate Students:</strong>{' '}
                "Travel and expedite among the world of ECG tracings. Discover
                the latest breakthroughs in cardiac diagnostics. Enhance your
                clinical skills of ECG by interpreting cardiac anomalies with
                the help of our skilled experts to make accurate diagnoses in
                cardiac care."
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 199/-
            </p>
            <p>
              <strong>Number of Slots:</strong> 1
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> 19th September 10:00 AM to 12:00 PM
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to deepen your understanding of ECG interpretation and
                cardiac diagnosis!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 1,
    session: 'Morning',
    name: 'Disaster Management',
    price: 499,
    description: 'Single slot available',
    image: '/image/scientific/Disaster_Management.png',
    id: 20,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Disaster Management</h1>
          </header>
          <section>
            <p>
              "Be prepared, don’t be scared, show disasters we have dared. So
              are you ready??? Drop, cover, and hold on, as we take you into the
              realm of disasters, where time is of the essence and you must make
              haste. Let your skills encourage you to coordinate through the
              challenges with confidence. This session sharpens skills for
              survival and to save lives."
            </p>
          </section>
          <section>
            <h2>Insights</h2>
            <ul>
              <li>
                First-ever mock-drill on disaster management integrating
                respective medical departments.
              </li>
              <li>
                Learn the techniques to provide the right care at the right time
                to the right person.
              </li>
              <li>
                Hands-on interventional exposure through various emergency
                stations.
              </li>
            </ul>
          </section>
          <section>
            <h2>Eligibility</h2>
            <ul>
              <li>All MBBS undergraduates and interns are eligible.</li>
            </ul>
          </section>
          <section>
            <h2>Pre-Requisite</h2>
            <ul>
              <li>Basic registration must be completed.</li>
              <li>
                <strong>Registration Fee:</strong> 499/-
              </li>
            </ul>
          </section>
          <section>
            <h2>Date and Time</h2>
            <p>
              <strong>Date:</strong> September 19th, 2024 – 10:00 AM
            </p>
          </section>
          <section>
            <h2>Contact Us</h2>
            <ul>
              <li>
                <strong>Scientific Committee Head</strong>
              </li>
              <li>D. Sai Niharika: 9392701708</li>
              <li>V. Purushotham: 9550332475</li>
            </ul>
          </section>
        </div>
      </>
    ),
  },
  {
    day: 1,
    session: 'Afternoon',
    name: 'BSS 1',
    price: 899,
    description: 'Another slot available',
    image: '/image/scientific/BSS.png',
    id: 21,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Basic Surgical Skills</h1>
          </header>
          <section>
            <p>
              Gain the confidence and expertise you need to excel in surgical
              settings. Our Basic Surgical Skills workshop covers the core
              techniques like gowning, gloving, suturing, catheterization, Ryles
              tube insertion, and wound dressing. Join us and discover the
              satisfaction of providing exceptional patient care.
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Gloving and Gowning:</strong> “Join us for a hands-on
                Surgical Workshop on Gloving and Gowning!”
              </li>
              <li>
                <strong>Suturing and Knotting:</strong> “Want to master the art
                of suturing? Our Surgical Workshop is your golden ticket! Don't
                miss this opportunity to enhance your surgical skills.”
              </li>
              <li>
                <strong>Ryles Tube:</strong> “Check out our Ryles tube through
                the nasal passage, to the stomach’s door in our mannequin.”
              </li>
              <li>
                <strong>Foley Catheterization:</strong> “Master catheterization
                techniques with our hands-on experience.”
              </li>
              <li>
                <strong>Wound Dressing:</strong> “Step up your surgical skills
                with our wound dressing workshop. Join us for a valuable
                learning experience!”
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 899/-
            </p>
            <p>
              <strong>Date:</strong> 19th September and 20th September
            </p>
            <p>
              <strong>Number of Slots:</strong> 2
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> 19th September 1:30 PM to 5:00 PM
              </li>
              <li>
                <strong>Slot 2:</strong> 20th September 9:00 AM to 12:30 PM
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to enhance your surgical skills with hands-on
                experience!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 1,
    session: 'Afternoon',
    name: 'Opthalmology 1',
    price: 1199,
    description: 'Two more slots available on day 2 and day 3, afternoon',
    image: '/image/scientific/Opthalmology.png',
    id: 22,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Ophthalmology</h1>
          </header>
          <section>
            <p>
              "Join our ophthalmology workshop to gain hands-on experience in
              essential eye procedures, including injections, cataract surgery
              on goat eyes, and foreign body removal. Perfect for enhancing your
              practical skills under expert guidance."
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Subconjunctival and Intravitreal Injection:</strong>{' '}
                "Real-time experience to feel the vitreous humour."
              </li>
              <li>
                <strong>Cataract Surgery on Goat Eye:</strong> "Hands-on
                opportunity to handle IOL in goat eye."
              </li>
              <li>
                <strong>Corneal Foreign Body Removal:</strong> "Hands-on use of
                corneal spud."
              </li>
              <li>
                <strong>Sclerocorneal Suturing:</strong> "Hands-on needle work
                with cornea and sclera in goat eye."
              </li>
              <li>
                <strong>Fundus Examination:</strong> "Realistic maladies
                experience in mannequin."
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 1199/-
            </p>
            <p>
              <strong>Number of Slots:</strong> 3
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> 19th September 2:00 PM to 4:00 PM
              </li>
              <li>
                <strong>Slot 2:</strong> 20th September 2:00 PM to 4:00 PM
              </li>
              <li>
                <strong>Slot 3:</strong> 21st September 2:00 PM to 4:00 PM
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to enhance your ophthalmology skills with hands-on
                experience!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 1,
    session: 'Afternoon',
    name: 'ICU 1',
    price: 999,
    description: 'Two more slots available on day 2 and day 3, morning',
    image: '/image/scientific/ICU.png',
    id: 23,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Intensive Care Unit Workshop</h1>
          </header>
          <section>
            <p>
              "Learn the critical skills needed to handle life-threatening
              injuries in this ICU workshop, including emergency management, ICU
              transfer, and team-based approaches for cardiac arrest and shock
              management."
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Trauma Care Approach:</strong> "Blunt trauma chest and
                abdomen."
              </li>
              <li>
                <strong>Emergency Care Setup:</strong>
                <ul>
                  <li>Ventilator</li>
                  <li>Central Line</li>
                  <li>Blood Transfer</li>
                  <li>Monitoring of Patient</li>
                  <li>Shift to ICU</li>
                </ul>
              </li>
              <li>
                <strong>Team-Based Approach on Cardiac Arrest:</strong>
                <ul>
                  <li>Defibrillator</li>
                  <li>CPR Technique</li>
                  <li>Core Team Dynamics</li>
                </ul>
              </li>
              <li>
                <strong>Team-Based Approach on Shock Management:</strong>
                <ul>
                  <li>Pathophysiology</li>
                  <li>Stages of Shock</li>
                  <li>Management</li>
                </ul>
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 999/-
            </p>
            <p>
              <strong>Number of Slots:</strong> 3
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> 19th September 1:30 PM to 4:30 PM
              </li>
              <li>
                <strong>Slot 2:</strong> 20th September 9:00 AM to 12:30 PM
              </li>
              <li>
                <strong>Slot 3:</strong> 21st September 9:00 AM to 12:30 PM
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to master critical ICU skills and improve your emergency
                management techniques!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 1,
    session: 'Afternoon',
    name: 'BPCS 2',
    price: 799,
    description: 'Another slot available',
    image: '/image/scientific/BPCS.png',
    id: 24,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Basic Procedural Clinical Skills</h1>
          </header>
          <section>
            <p>
              Dive into the practical side of medicine with our workshop on
              procedural clinical skills. This workshop covers essential
              procedures like heart sounds, ascitic fluid removal, and lumbar
              puncture techniques. It's ideal for anyone interested in
              developing a solid foundation in clinical procedures.
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Ascitic Tapping:</strong> Let the syringe fill with
                ascitic fluid and your brains with skill.
              </li>
              <li>
                <strong>Lumbar Puncture:</strong> Let us meet hands-on to know
                the ailment hidden in spinal fluid.
              </li>
              <li>
                <strong>Heart Sounds and Murmurs:</strong> Hear the murmurs and
                learn to heal the soul.
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 799/-
            </p>
            <p>
              <strong>Date:</strong> 19th September
            </p>
            <p>
              <strong>Number of Slots:</strong> 2
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> Morning 8:00 AM to 1:00 PM
              </li>
              <li>
                <strong>Slot 2:</strong>
                <ul>
                  <li>Morning 8:00 AM to 10:00 AM</li>
                  <li>Afternoon 2:00 PM to 5:00 PM</li>
                </ul>
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to enhance your clinical skills with hands-on
                experience!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 1,
    session: 'Afternoon',
    name: 'Poster Presentation',
    price: 99,
    description: 'Single slot available',
    image: '/image/scientific/Poster_Presentation.png',
    id: 25,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Poster Presentation</h1>
          </header>
          <section>
            <p>
              "Innovation at its finest. When words fail, let the visuals speak.
              Behind every successful poster, there is a story worth sharing.
              Make your ideas come to life with your poster and prepare it as a
              masterpiece that captures attention."
            </p>
          </section>
          <section>
            <h2>Eligibility</h2>
            <ul>
              <li>Undergraduate MBBS students and interns.</li>
              <li>
                Basic registration and poster presentation registration is
                mandatory.
              </li>
              <li>
                Delegates can participate individually or as a team of two.
              </li>
            </ul>
          </section>
          <section>
            <h2>Abstract Format</h2>
            <ul>
              <li>
                <strong>Font:</strong> Times New Roman
              </li>
              <li>
                <strong>Font Size:</strong> 12
              </li>
              <li>
                <strong>Format:</strong> PDF form
              </li>
              <li>
                <strong>Word Limit:</strong> 250-300 words
              </li>
            </ul>
          </section>
          <section>
            <h2>Registration Fee</h2>
            <p>
              <strong>Registration Fee:</strong> 99/-
            </p>
          </section>
          <section>
            <h2>Rules for Poster Presentation</h2>
            <ul>
              <li>
                ID No will be provided within a few days after registration.
              </li>
              <li>
                Delegate should submit their abstract within the given time with
                their ID number which is provided.
              </li>
              <li>Presentation should be given by the author only.</li>
              <li>
                The research topic should be clinically relevant and
                interesting.
              </li>
              <li>Last date for submission: 31st August.</li>
              <li>
                Notification of acceptance/rejection regarding the status of the
                abstract will be sent to the author via email within a few days
                after the last date of abstract submission.
              </li>
              <li>
                Further instructions on the poster presentation will be
                provided.
              </li>
            </ul>
          </section>
          <section>
            <h2>Abstract Must Include</h2>
            <ul>
              <li>ID No</li>
              <li>Title</li>
              <li>Background</li>
              <li>Aim and Objectives</li>
              <li>Materials and Methodologies</li>
              <li>Results</li>
              <li>Conclusion</li>
              <li>Name of Authors</li>
              <li>Name of the Co-author (if any)</li>
              <li>Name of the College</li>
              <li>Batch</li>
              <li>Contact Number</li>
              <li>Department of Case</li>
            </ul>
          </section>
          <section>
            <h2>Submission</h2>
            <p>
              Submission to be made via email to:{' '}
              <a href='mailto:smarcabstarct2k24@gmail.com'>
                smarcabstarct2k24@gmail.com
              </a>
            </p>
          </section>
          <section>
            <h2>Contact Us</h2>
            <ul>
              <li>
                <strong>Scientific Committee Head</strong>
              </li>
              <li>D. Sai Niharika: 9392701708</li>
              <li>V. Purushotham: 9550332475</li>
              <li>
                <strong>Research Team</strong>
              </li>
              <li>A. Poorna Priyanka: 7095701534</li>
              <li>Nikhil Rawal: 8074519100</li>
            </ul>
          </section>
        </div>
      </>
    ),
  },
  {
    day: 1,
    session: 'Afternoon',
    name: 'Med Charades',
    price: 99,
    description: 'Single slot available',
    image: '/image/scientific/Med_Charades.png',
    id: 26,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Med Charades</h1>
          </header>
          <section>
            <p>
              "A fusion of your favorite childhood game and medicine. This is
              where medical knowledge meets theatrical flair. Unmask the
              diagnosis and unleash the fun!"
            </p>
          </section>
          <section>
            <h2>Eligibility</h2>
            <p>MBBS undergraduates from 1st year to internship.</p>
          </section>
          <section>
            <h2>Competition Rules</h2>
            <ul>
              <li>Team of 3 members</li>
              <li>
                Three rounds:
                <ul>
                  <li>Preliminary</li>
                  <li>Qualifiers</li>
                  <li>Finals</li>
                </ul>
              </li>
              <li>Entry fee: Rs 99/-</li>
            </ul>
          </section>
          <section>
            <h2>Come Test Your Acting Skills</h2>
            <p>
              <strong>Exciting prize money for winners!</strong>
            </p>
          </section>
        </div>
      </>
    ),
  },
  {
    day: 2,
    session: 'Morning',
    name: 'Orthopaedics 1',
    price: 799,
    description: 'Another slot available on day 3, afternoon',
    image: '/image/scientific/Orthopaedics.png',
    id: 27,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Orthopedics Workshop</h1>
          </header>
          <section>
            <p>
              "Explore the latest techniques in Orthopedics and learn from
              experts in the field. From tendon repair to plate fixation, get
              hands-on training and elevate your practice!"
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Tendon Repair on Cadaver:</strong> "Discover the secrets
                to orthopedics by mastering the hands-on cadaveric training for
                unparalleled tendon repair expertise and perfect your technique
                on real tissue."
              </li>
              <li>
                <strong>Cast Application:</strong> "From beginner to expert:
                Enhance your clinical acumen through in-depth exploration of
                cast application techniques and principles."
              </li>
              <li>
                <strong>Plate Fixation:</strong> "Seize this opportunity to gain
                confidence in managing complex fractures through our precise
                plate fixation training along with your peer network."
              </li>
              <li>
                <strong>Exhibition of Implants:</strong> "Expand your surgical
                horizons with a comprehensive exploration of new implant
                technologies and build your own Ortho empire."
              </li>
              <li>
                <strong>RTA Management:</strong> "Acquire the essential
                competencies through our lecture presentation to effectively
                triage, stabilize, and manage patients suffering from the
                multifaceted trauma spectrum inherent in RTA."
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 899/-
            </p>
            <p>
              <strong>Number of Slots:</strong> 2
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> 20th September 9:00 AM to 12:30 PM
              </li>
              <li>
                <strong>Slot 2:</strong> 21st September 1:30 PM to 4:30 PM
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to enhance your orthopedic skills with hands-on
                experience!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 2,
    session: 'Morning',
    name: 'Pulmonology',
    price: 549,
    description: 'Single slot available',
    image: '/image/scientific/Pulmonology.png',
    id: 28,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Pulmonology Workshop</h1>
          </header>
          <section>
            <p>
              "From breath sounds to pleural fluid analysis, our Pulmonology
              workshop covers it all! Join us to enhance your lung health
              assessment skills and provide better patient outcomes."
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Breath Sounds:</strong> "Want to master the art of
                listening to the lungs? Join our pulmonology workshop for
                hands-on learning with expert guidelines."
              </li>
              <li>
                <strong>Pleural Fluid Tapping:</strong> "Drain the uncertainty!
                Get hands-on experience with pleural fluid tapping and enhance
                your patient care skills."
              </li>
              <li>
                <strong>X Rays:</strong> "Transform shadows into insights. Crack
                the code of medical imaging."
              </li>
              <li>
                <strong>ABG Analysis:</strong> "Unlock the secret of acid-base
                balance and master the art of interpreting blood gases."
              </li>
              <li>
                <strong>Spirometry:</strong> "Take a deep breath and dive into
                the fascinating world of pulmonary physiology and spirometry."
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 549/-
            </p>
            <p>
              <strong>Number of Slots:</strong> 1
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> 20th September 9:00 AM to 12:30 PM
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to enhance your pulmonary assessment skills and improve
                patient outcomes with expert guidance!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 2,
    session: 'Morning',
    name: 'ICU 2',
    price: 999,
    description:
      'Two more slots available on day 1 afternoon and day 3 morning',
    image: '/image/scientific/ICU.png',
    id: 29,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Intensive Care Unit Workshop</h1>
          </header>
          <section>
            <p>
              "Learn the critical skills needed to handle life-threatening
              injuries in this ICU workshop, including emergency management, ICU
              transfer, and team-based approaches for cardiac arrest and shock
              management."
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Trauma Care Approach:</strong> "Blunt trauma chest and
                abdomen."
              </li>
              <li>
                <strong>Emergency Care Setup:</strong>
                <ul>
                  <li>Ventilator</li>
                  <li>Central Line</li>
                  <li>Blood Transfer</li>
                  <li>Monitoring of Patient</li>
                  <li>Shift to ICU</li>
                </ul>
              </li>
              <li>
                <strong>Team-Based Approach on Cardiac Arrest:</strong>
                <ul>
                  <li>Defibrillator</li>
                  <li>CPR Technique</li>
                  <li>Core Team Dynamics</li>
                </ul>
              </li>
              <li>
                <strong>Team-Based Approach on Shock Management:</strong>
                <ul>
                  <li>Pathophysiology</li>
                  <li>Stages of Shock</li>
                  <li>Management</li>
                </ul>
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 999/-
            </p>
            <p>
              <strong>Number of Slots:</strong> 3
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> 19th September 1:30 PM to 4:30 PM
              </li>
              <li>
                <strong>Slot 2:</strong> 20th September 9:00 AM to 12:30 PM
              </li>
              <li>
                <strong>Slot 3:</strong> 21st September 9:00 AM to 12:30 PM
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to master critical ICU skills and improve your emergency
                management techniques!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 2,
    session: 'Morning',
    name: 'BSS 2',
    price: 899,
    description: 'Another slot available on day 1, afternoon',
    image: '/image/scientific/BSS.png',
    id: 30,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Basic Surgical Skills</h1>
          </header>
          <section>
            <p>
              Gain the confidence and expertise you need to excel in surgical
              settings. Our Basic Surgical Skills workshop covers the core
              techniques like gowning, gloving, suturing, catheterization, Ryles
              tube insertion, and wound dressing. Join us and discover the
              satisfaction of providing exceptional patient care.
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Gloving and Gowning:</strong> “Join us for a hands-on
                Surgical Workshop on Gloving and Gowning!”
              </li>
              <li>
                <strong>Suturing and Knotting:</strong> “Want to master the art
                of suturing? Our Surgical Workshop is your golden ticket! Don't
                miss this opportunity to enhance your surgical skills.”
              </li>
              <li>
                <strong>Ryles Tube:</strong> “Check out our Ryles tube through
                the nasal passage, to the stomach’s door in our mannequin.”
              </li>
              <li>
                <strong>Foley Catheterization:</strong> “Master catheterization
                techniques with our hands-on experience.”
              </li>
              <li>
                <strong>Wound Dressing:</strong> “Step up your surgical skills
                with our wound dressing workshop. Join us for a valuable
                learning experience!”
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 899/-
            </p>
            <p>
              <strong>Date:</strong> 19th September and 20th September
            </p>
            <p>
              <strong>Number of Slots:</strong> 2
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> 19th September 1:30 PM to 5:00 PM
              </li>
              <li>
                <strong>Slot 2:</strong> 20th September 9:00 AM to 12:30 PM
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to enhance your surgical skills with hands-on
                experience!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 2,
    session: 'Morning',
    name: 'Paper Presentation',
    price: 99,
    description: 'Single slot available',
    image: '/image/scientific/Paper_Presentation.png',
    id: 31,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Paper Presentation</h1>
          </header>
          <section>
            <p>
              "An opportunity for your novelty. Presenting a chance to formalize
              your curiosity, give wings to the thinker and writer in you, and
              bring your research into public view."
            </p>
          </section>
          <section>
            <h2>Eligibility</h2>
            <ul>
              <li>Undergraduate MBBS students and interns.</li>
              <li>
                Basic registration and paper presentation registration is
                mandatory.
              </li>
              <li>
                Delegate can participate individually or as a team of two.
              </li>
            </ul>
          </section>
          <section>
            <h2>Abstract Format</h2>
            <ul>
              <li>
                <strong>Font:</strong> Times New Roman
              </li>
              <li>
                <strong>Font Size:</strong> 12
              </li>
              <li>
                <strong>Format:</strong> PDF form
              </li>
              <li>
                <strong>Word Limit:</strong> 250-300
              </li>
            </ul>
          </section>
          <section>
            <h2>Registration Fee</h2>
            <p>
              <strong>Registration Fee:</strong> 99/-
            </p>
          </section>
          <section>
            <h2>Rules for Paper Presentation</h2>
            <ul>
              <li>
                ID No will be provided within a few days after registration.
              </li>
              <li>
                Delegate should submit their abstract within the given time with
                their ID number which is given to them.
              </li>
              <li>Presentation should be given by the author only.</li>
              <li>
                The research topic should be clinically relevant and
                interesting.
              </li>
              <li>Limit for paper presentation is 15 minutes.</li>
              <li>Last date for submission: 31st August.</li>
              <li>
                Notification of acceptance/rejection regarding the status of the
                abstract will be sent to the author via email within a few days
                after the last date of abstract submission.
              </li>
              <li>
                Further instructions on the paper presentation will be provided.
              </li>
            </ul>
          </section>
          <section>
            <h2>Abstract Must Include</h2>
            <ul>
              <li>ID No</li>
              <li>Title</li>
              <li>Background</li>
              <li>Aim and Objectives</li>
              <li>Results</li>
              <li>Conclusion</li>
              <li>Name of Authors</li>
              <li>Name of the Co-author (if any)</li>
              <li>Name of the College</li>
              <li>Batch</li>
              <li>Contact Number</li>
              <li>Department of Case</li>
            </ul>
          </section>
          <section>
            <h2>Submission</h2>
            <p>
              Submission to be made via email to:{' '}
              <a href='mailto:smarcabstarct2k24@gmail.com'>
                smarcabstarct2k24@gmail.com
              </a>
            </p>
          </section>
          <section>
            <h2>Contact Us</h2>
            <ul>
              <li>
                <strong>Scientific Committee Head</strong>
              </li>
              <li>D. Sai Niharika: 9392701708</li>
              <li>V. Purushotham: 9550332475</li>
              <li>
                <strong>Research Team</strong>
              </li>
              <li>Ch Sai Divya: 9573608051</li>
              <li>U Kavya: 8106599141</li>
            </ul>
          </section>
        </div>
      </>
    ),
  },
  {
    day: 2,
    session: 'Morning',
    name: 'Debate',
    price: 99,
    description: 'Single slot available',
    image: '/image/scientific/Debate.png',
    id: 32,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Debate</h1>
          </header>
          <section>
            <p>
              "They say actions speak louder than words. For a change, let your
              words speak and make an impact. How good and to what extent are
              you willing to go to defend something you believe in?"
            </p>
          </section>
          <section>
            <h2>Competition Rules</h2>
            <ul>
              <li>
                The debate is conducted in 3 rounds:
                <ul>
                  <li>Preliminary</li>
                  <li>Qualifiers</li>
                  <li>Finals</li>
                </ul>
              </li>
              <li>
                Participants should be in teams of 4 members:
                <ul>
                  <li>Two members should be supporting the motion.</li>
                  <li>Two members should be opposing the motion.</li>
                </ul>
              </li>
              <li>
                Topic will be given 2 days before the event (on 16/9/2024).
              </li>
              <li>
                4 teams will advance to the qualifiers. Further instructions
                will be provided via email.
              </li>
            </ul>
          </section>
          <section>
            <h2>Let the Battle Begin</h2>
            <p>
              <strong>Exciting prize money is given for winners!</strong>
            </p>
          </section>
        </div>
      </>
    ),
  },
  {
    day: 2,
    session: 'Afternoon',
    name: 'WET LAB (Part 1)',
    price: 999,
    description:
      'This is a single slot workshop covered under two parts on day 2 afternoon and day 3 morning sessions.',
    image: '/image/scientific/WET_LAB.png',
    id: 33,
    disabled: true,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Wet Lab</h1>
          </header>
          <section>
            <p>
              Enhance your surgical skills and build the bridge between science
              and art with our hands-on demonstration of pig skin suturing and
              buffalo bowel anastomosis.
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Basic Suturing and Knotting on Pig Skin:</strong>{' '}
                Hands-on practice to refine your suturing technique.
              </li>
              <li>
                <strong>Hands-on Bowel Suturing on Buffalo Intestine:</strong>{' '}
                Experience real-life surgical scenarios with buffalo intestine.
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 999/-
            </p>
            <p>
              <strong>Date:</strong> 20th September and 21st September
            </p>
            <p>
              <strong>Number of Slots:</strong> 1
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> Two parts
                <ul>
                  <li>
                    <strong>Part 1:</strong> 20th September – 1:30 PM to 4:30 PM
                  </li>
                  <li>
                    <strong>Part 2:</strong> 21st September – 9:00 AM to 12:30
                    PM
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to enhance your surgical skills with hands-on
                experience!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 2,
    session: 'Afternoon',
    name: 'Forensic Medicine',
    price: 399,
    description: 'Single slot available',
    image: '/image/scientific/Forensic_Medicine.png',
    id: 34,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Forensic Medicine Workshop</h1>
          </header>
          <section>
            <p>
              "Come and join this workshop with us to reveal the truth of a
              crime scene through a crime investigation skit. Gain the knowledge
              of ballistics and assess your knowledge of forensic science."
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Dive into the Science of Ballistics:</strong> "Come,
                comprehend your journey of forensic ballistics as every firearm
                on display holds potential clues for forensic experts seeking
                justice." - firearms exhibition
              </li>
              <li>
                <strong>Crime Scene Investigation:</strong> "Each crime scene
                unfolds a story; hence come and dive into the world of realistic
                crime scene investigation." - skit
              </li>
              <li>
                <strong>Quiz:</strong> "Assess your knowledge through a quiz on
                abuse against humanity and violence against doctors and health
                care workers."
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 399/-
            </p>
            <p>
              <strong>Number of Slots:</strong> 1
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> 20th September 2:00 PM to 4:00 PM
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to explore the world of forensic medicine and uncover
                the truth behind crime scenes!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 2,
    session: 'Afternoon',
    name: 'Opthalmology 2',
    price: 1199,
    description:
      'Two more slots available on day 1 and day 3 afternoon sessions.',
    image: '/image/scientific/Opthalmology.png',
    id: 35,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Ophthalmology</h1>
          </header>
          <section>
            <p>
              "Join our ophthalmology workshop to gain hands-on experience in
              essential eye procedures, including injections, cataract surgery
              on goat eyes, and foreign body removal. Perfect for enhancing your
              practical skills under expert guidance."
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Subconjunctival and Intravitreal Injection:</strong>{' '}
                "Real-time experience to feel the vitreous humour."
              </li>
              <li>
                <strong>Cataract Surgery on Goat Eye:</strong> "Hands-on
                opportunity to handle IOL in goat eye."
              </li>
              <li>
                <strong>Corneal Foreign Body Removal:</strong> "Hands-on use of
                corneal spud."
              </li>
              <li>
                <strong>Sclerocorneal Suturing:</strong> "Hands-on needle work
                with cornea and sclera in goat eye."
              </li>
              <li>
                <strong>Fundus Examination:</strong> "Realistic maladies
                experience in mannequin."
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 1199/-
            </p>
            <p>
              <strong>Number of Slots:</strong> 3
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> 19th September 2:00 PM to 4:00 PM
              </li>
              <li>
                <strong>Slot 2:</strong> 20th September 2:00 PM to 4:00 PM
              </li>
              <li>
                <strong>Slot 3:</strong> 21st September 2:00 PM to 4:00 PM
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to enhance your ophthalmology skills with hands-on
                experience!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 2,
    session: 'Afternoon',
    name: 'Neonatology',
    price: 499,
    description: 'Single slot available',
    image: '/image/scientific/Neonatology.png',
    id: 36,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Neonatology Workshop</h1>
          </header>
          <section>
            <p>
              "This workshop provides you with knowledge about neonatal care and
              enlightens you with new skills to make a life-changing difference
              from the very first breath."
            </p>
            <p>
              "Seeing a miracle may inspire you, but knowing a miracle will
              change you. In the world of neonatology, hope and healing go hand
              in hand."
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Neonatal Resuscitation Program:</strong> "Let us learn
                how to resuscitate a newborn infant in just 4 steps: ABCD -
                Airway, Breathing, Circulation, Drugs."
              </li>
              <li>
                <strong>CPR:</strong> "Let us learn together how to help a baby
                breathe and have its heartbeat after birth."
              </li>
              <li>
                <strong>ET Tube Intubation:</strong> "Let us enhance our skills
                in securing a patient airway as well as oxygenation and
                ventilation. Come, enroll, and join in our neonate world."
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 499/-
            </p>
            <p>
              <strong>Number of Slots:</strong> 1
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> 20th September 1:30 PM to 4:30 PM
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to enhance your neonatology skills with hands-on
                experience!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 2,
    session: 'Afternoon',
    name: 'Medi Quiz',
    price: 149,
    description: 'Single slot available',
    image: '/image/scientific/Medi_Quiz.png',
    id: 37,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Medi-Quiz</h1>
          </header>
          <section>
            <p>
              "Where medical minds meet, compete, and thrive. Buckle up,
              brainiacs, it's time to put your knowledge to the test. Gather
              your thoughts and let the quiz battle begin."
            </p>
          </section>
          <section>
            <h2>Eligibility</h2>
            <ul>
              <li>MBBS undergraduates from 1st year to internship.</li>
            </ul>
          </section>
          <section>
            <h2>Prerequisites</h2>
            <ul>
              <li>Basic registration is a must.</li>
              <li>
                <strong>Entry Fee:</strong> RS 149/- only.
              </li>
            </ul>
          </section>
          <section>
            <h2>Quiz Structure</h2>
            <ul>
              <li>Medical Jargon Jumble</li>
              <li>Medical Image Match</li>
              <li>Medical History and Mystery</li>
              <li>Diagnosis Delirium</li>
              <li>Rapid Fire</li>
              <li>Surprise Round</li>
            </ul>
          </section>
          <section>
            <h2>Event Details</h2>
            <p>
              <strong>Date:</strong> 20/09/2024 – Afternoon Session
            </p>
            <p>
              <strong>Exciting prize money is given!</strong>
            </p>
          </section>
        </div>
      </>
    ),
  },
  {
    day: 2,
    session: 'Afternoon',
    name: 'Panel Discussion',
    price: 149,
    description: 'Single slot available',
    image: '/image/scientific/Panel_Discussion.png',
    id: 38,
    content: (
      <>
        <div className='workshop-content mt-24'>
          <header className='mt-24 p-10'>
            <h1>Panel Discussion</h1>
          </header>
          <section>
            <p>
              "Let us engage, discuss, and discover new possibilities. Together
              we can explore and innovate."
            </p>
          </section>
          <section>
            <h2>Eligibility</h2>
            <p>MBBS undergraduates from 1st year to internship.</p>
          </section>
          <section>
            <h2>Competition Rules</h2>
            <ul>
              <li>Team of 5 members, 5 minutes will be given</li>
              <li>1 of 5 members should be a mentor</li>
              <li>Topic will be given before 2 days (i.e. [16/09/2024])</li>
            </ul>
          </section>
          <section>
            <h2>Entry Fee</h2>
            <p>Rs 99/-</p>
          </section>
          <section>
            <h2>Come Be a Part of the Dialogue That Drives Change</h2>
            <p>
              <strong>Exciting prize money is given for winners!</strong>
            </p>
          </section>
        </div>
      </>
    ),
  },
  {
    day: 3,
    session: 'Morning',
    name: 'WET LAB (Part 2)',
    price: 999,
    description:
      'This is a single slot workshop covered under two parts on day 2 afternoon and day 3 morning sessions.',
    image: '/image/scientific/WET_LAB.png',
    id: 33,
    disabled: true,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Wet Lab</h1>
          </header>
          <section>
            <p>
              Enhance your surgical skills and build the bridge between science
              and art with our hands-on demonstration of pig skin suturing and
              buffalo bowel anastomosis.
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Basic Suturing and Knotting on Pig Skin:</strong>{' '}
                Hands-on practice to refine your suturing technique.
              </li>
              <li>
                <strong>Hands-on Bowel Suturing on Buffalo Intestine:</strong>{' '}
                Experience real-life surgical scenarios with buffalo intestine.
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 999/-
            </p>
            <p>
              <strong>Date:</strong> 20th September and 21st September
            </p>
            <p>
              <strong>Number of Slots:</strong> 1
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> Two parts
                <ul>
                  <li>
                    <strong>Part 1:</strong> 20th September – 1:30 PM to 4:30 PM
                  </li>
                  <li>
                    <strong>Part 2:</strong> 21st September – 9:00 AM to 12:30
                    PM
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to enhance your surgical skills with hands-on
                experience!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 3,
    session: 'Morning',
    name: 'Oncology',
    price: 599,
    description: 'Single slot available',
    image: '/image/scientific/Oncology.png',
    id: 40,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Fundamentals of Oncology</h1>
          </header>
          <section>
            <p>
              "This workshop provides an introduction to cancer care.
              Participants will explore various diagnostic techniques, including
              imaging and molecular testing, that are crucial for identification
              at its earliest stages. This also offers innovative treatment
              options."
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Introduction to Oncology:</strong> "Understanding the
                basic science of oncology."
              </li>
              <li>
                <strong>Diagnostic Imaging and Biopsy Techniques:</strong>{' '}
                "Knowing the importance of imaging (CT, MRI, X-RAY) where it can
                suggest the possible diagnosis and where a biopsy (needle
                biopsy, excisional biopsy, endoscopic biopsy, etc.) can confirm
                or refute them, offering a definitive proof."
              </li>
              <li>
                <strong>Cancer Treatment and Management:</strong> "Cancer
                diagnosis is not the end but the beginning of a journey that
                involves many treatment procedures and emphasizes the importance
                of early detection and the use of advanced treatments to improve
                outcomes."
              </li>
              <li>
                <strong>Advances in Cancer Research and Mammography:</strong>{' '}
                "Reflects the potential of personalized medicine and
                cutting-edge technologies to revolutionize cancer care and
                stresses the importance of detecting breast cancer before it
                advances, using the power of mammography."
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 599/-
            </p>
            <p>
              <strong>Number of Slots:</strong> 1
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> 21st September 10:00 AM to 12:30 PM
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to gain foundational knowledge in oncology and explore
                innovative approaches to cancer care!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 3,
    session: 'Morning',
    name: 'ICU 3',
    price: 999,
    description:
      'Two more slots available on day 1 afternoon and day 3 morning',
    image: '/image/scientific/ICU.png',
    id: 41,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Intensive Care Unit Workshop</h1>
          </header>
          <section>
            <p>
              "Learn the critical skills needed to handle life-threatening
              injuries in this ICU workshop, including emergency management, ICU
              transfer, and team-based approaches for cardiac arrest and shock
              management."
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Trauma Care Approach:</strong> "Blunt trauma chest and
                abdomen."
              </li>
              <li>
                <strong>Emergency Care Setup:</strong>
                <ul>
                  <li>Ventilator</li>
                  <li>Central Line</li>
                  <li>Blood Transfer</li>
                  <li>Monitoring of Patient</li>
                  <li>Shift to ICU</li>
                </ul>
              </li>
              <li>
                <strong>Team-Based Approach on Cardiac Arrest:</strong>
                <ul>
                  <li>Defibrillator</li>
                  <li>CPR Technique</li>
                  <li>Core Team Dynamics</li>
                </ul>
              </li>
              <li>
                <strong>Team-Based Approach on Shock Management:</strong>
                <ul>
                  <li>Pathophysiology</li>
                  <li>Stages of Shock</li>
                  <li>Management</li>
                </ul>
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 999/-
            </p>
            <p>
              <strong>Number of Slots:</strong> 3
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> 19th September 1:30 PM to 4:30 PM
              </li>
              <li>
                <strong>Slot 2:</strong> 20th September 9:00 AM to 12:30 PM
              </li>
              <li>
                <strong>Slot 3:</strong> 21st September 9:00 AM to 12:30 PM
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to master critical ICU skills and improve your emergency
                management techniques!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 3,
    session: 'Morning',
    name: 'Gynaecology 2',
    price: 899,
    description: 'Another slot available',
    image: '/image/scientific/Gynaecology.png',
    id: 42,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Obstetrics Workshop</h1>
          </header>
          <section>
            <p>
              "Elevate your Obstetrics skills by our Workshop to gain hands-on
              experience in essential childbirth procedures, from normal and
              breech deliveries to forceps techniques and IUD insertion. Perfect
              for enhancing your practical skills in a supportive environment."
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Normal Vaginal Delivery:</strong> "Master the art of
                delivery through hands-on practice on a lifelike mannequin."
              </li>
              <li>
                <strong>Breech Delivery:</strong> "Gain confidence in managing
                breech presentation training with expert guidance."
              </li>
              <li>
                <strong>IUD Insertion:</strong> "Enhance your contraceptive
                skills with IUD insertion training. Hands-on simulation."
              </li>
              <li>
                <strong>Forceps Delivery:</strong> "Elevate your obstetric
                skills. Join our exclusive forceps delivery workshop."
              </li>
              <li>
                <strong>Per Vaginal Examination:</strong> "Learn essential per
                vaginal examination techniques. Hands-on training in a
                respectful and supportive environment."
              </li>
              <li>
                <strong>LUCINA:</strong> "Experience realistic childbirth
                simulation with Lucina through advanced techniques."
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 999/-
            </p>
            <p>
              <strong>Number of Slots:</strong> 2
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> 19th September 9:00 AM to 1:00 PM
              </li>
              <li>
                <strong>Slot 2:</strong> 21st September 9:00 AM to 1:00 PM
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to enhance your obstetrics skills with hands-on
                experience!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 3,
    session: 'Morning',
    name: 'Case Presentation',
    price: 99,
    description: 'Single slot available',
    image: '/image/scientific/Case_Presentation.png',
    id: 43,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Case Presentation</h1>
          </header>
          <section>
            <p>
              "Diseases to tell tales. Ready your voices to bring us the tale of
              a patient and their suffering, a case you have only encountered in
              textbooks before. Present with impact, impress with insight!"
            </p>
          </section>
          <section>
            <h2>Eligibility</h2>
            <ul>
              <li>Undergraduate MBBS students and interns.</li>
              <li>
                Basic registration and case presentation registration are
                mandatory.
              </li>
              <li>
                Delegates can participate individually or as a team of two.
              </li>
            </ul>
          </section>
          <section>
            <h2>Abstract Format</h2>
            <ul>
              <li>
                <strong>Font:</strong> Times New Roman
              </li>
              <li>
                <strong>Font Size:</strong> 12
              </li>
              <li>
                <strong>Format:</strong> PDF Format
              </li>
              <li>
                <strong>Word Limit:</strong> 300 words
              </li>
            </ul>
          </section>
          <section>
            <h2>Registration Fee</h2>
            <p>
              <strong>Registration Fee:</strong> 99/-
            </p>
          </section>
          <section>
            <h2>Rules for Case Presentation</h2>
            <ul>
              <li>
                ID No will be provided within a few days after registration.
              </li>
              <li>
                Delegate should submit their abstract within the given time with
                their ID number which is provided.
              </li>
              <li>Presentation should be given by the author only.</li>
              <li>
                The research topic should be clinically relevant and
                interesting.
              </li>
              <li>
                The limit for case presentation is 7 minutes (5 minutes
                presentation and 2 minutes discussion).
              </li>
              <li>Last date for submission: 31st August.</li>
              <li>
                Notification of acceptance/rejection regarding the status of the
                abstract will be sent to the author via email within a few days
                after the last date of abstract submission.
              </li>
              <li>
                Further instructions on the case presentation will be provided.
              </li>
            </ul>
          </section>
          <section>
            <h2>Abstract Must Include</h2>
            <ul>
              <li>ID No</li>
              <li>Title</li>
              <li>Summary of Case</li>
              <li>Name of Authors</li>
              <li>Name of the Co-author (if any)</li>
              <li>Name of the College</li>
              <li>Batch</li>
              <li>Contact Number</li>
              <li>Department of Case</li>
            </ul>
          </section>
          <section>
            <h2>Submission</h2>
            <p>
              Submission to be made via email to:{' '}
              <a href='mailto:smarcabstarct2k24@gmail.com'>
                smarcabstarct2k24@gmail.com
              </a>
            </p>
          </section>
          <section>
            <h2>Contact Us</h2>
            <ul>
              <li>
                <strong>Scientific Committee Head</strong>
              </li>
              <li>D. Sai Niharika: 9392701708</li>
              <li>V. Purushotham: 9550332475</li>
              <li>
                <strong>Research Team</strong>
              </li>
              <li>S. Binni Swetha: 7995797406</li>
              <li>A. Bhavana: 8341808659</li>
            </ul>
          </section>
        </div>
      </>
    ),
  },
  {
    day: 3,
    session: 'Afternoon',
    name: 'Psychiatry',
    price: 299,
    description: 'Single slot available',
    image: '/image/scientific/Psychiatry.png',
    id: 44,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Psychiatry Workshop</h1>
          </header>
          <section>
            <p>
              "This workshop will provide participants with a comprehensive
              overview of critical mental health topics, with a focus on early
              intervention."
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Electroconvulsive Therapy:</strong> "The shock of ECT is
                not just electrical, but also emotional, as it jolts the mind
                back to life and the soul back to hope."
              </li>
              <li>
                <strong>Stress and Suicide:</strong> "Stress may feel like a
                heavy burden, but it's not worth sacrificing your life. You got
                this, and there's help available every step of the way."
              </li>
              <li>
                <strong>Childhood Sexual Abuse:</strong> "Your voice matters,
                and your story deserves to be heard."
              </li>
              <li>
                <strong>Substance Abuse:</strong> "Addiction is like being in a
                toxic relationship. You know it's bad, but you can't help going
                back."
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 299/-
            </p>
            <p>
              <strong>Number of Slots:</strong> 1
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> 21st September 2:00 PM to 4:00 PM
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to enhance your understanding of critical mental health
                topics with hands-on experience!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 3,
    session: 'Afternoon',
    name: 'Orthopaedics 2',
    price: 799,
    description: 'Two more slots available on day 1 and day 3 afternoon',
    image: '/image/scientific/Orthopaedics.png',
    id: 45,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Orthopedics Workshop</h1>
          </header>
          <section>
            <p>
              "Explore the latest techniques in Orthopedics and learn from
              experts in the field. From tendon repair to plate fixation, get
              hands-on training and elevate your practice!"
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Tendon Repair on Cadaver:</strong> "Discover the secrets
                to orthopedics by mastering the hands-on cadaveric training for
                unparalleled tendon repair expertise and perfect your technique
                on real tissue."
              </li>
              <li>
                <strong>Cast Application:</strong> "From beginner to expert:
                Enhance your clinical acumen through in-depth exploration of
                cast application techniques and principles."
              </li>
              <li>
                <strong>Plate Fixation:</strong> "Seize this opportunity to gain
                confidence in managing complex fractures through our precise
                plate fixation training along with your peer network."
              </li>
              <li>
                <strong>Exhibition of Implants:</strong> "Expand your surgical
                horizons with a comprehensive exploration of new implant
                technologies and build your own Ortho empire."
              </li>
              <li>
                <strong>RTA Management:</strong> "Acquire the essential
                competencies through our lecture presentation to effectively
                triage, stabilize, and manage patients suffering from the
                multifaceted trauma spectrum inherent in RTA."
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 899/-
            </p>
            <p>
              <strong>Number of Slots:</strong> 2
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> 20th September 9:00 AM to 12:30 PM
              </li>
              <li>
                <strong>Slot 2:</strong> 21st September 1:30 PM to 4:30 PM
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to enhance your orthopedic skills with hands-on
                experience!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 3,
    session: 'Afternoon',
    name: 'Opthalmology 3',
    price: 1199,
    description:
      'Two more slots available on day 1 and day 2 afternoon sessions.',
    image: '/image/scientific/Opthalmology.png',
    id: 46,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>Ophthalmology</h1>
          </header>
          <section>
            <p>
              "Join our ophthalmology workshop to gain hands-on experience in
              essential eye procedures, including injections, cataract surgery
              on goat eyes, and foreign body removal. Perfect for enhancing your
              practical skills under expert guidance."
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Subconjunctival and Intravitreal Injection:</strong>{' '}
                "Real-time experience to feel the vitreous humour."
              </li>
              <li>
                <strong>Cataract Surgery on Goat Eye:</strong> "Hands-on
                opportunity to handle IOL in goat eye."
              </li>
              <li>
                <strong>Corneal Foreign Body Removal:</strong> "Hands-on use of
                corneal spud."
              </li>
              <li>
                <strong>Sclerocorneal Suturing:</strong> "Hands-on needle work
                with cornea and sclera in goat eye."
              </li>
              <li>
                <strong>Fundus Examination:</strong> "Realistic maladies
                experience in mannequin."
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 1199/-
            </p>
            <p>
              <strong>Number of Slots:</strong> 3
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> 19th September 2:00 PM to 4:00 PM
              </li>
              <li>
                <strong>Slot 2:</strong> 20th September 2:00 PM to 4:00 PM
              </li>
              <li>
                <strong>Slot 3:</strong> 21st September 2:00 PM to 4:00 PM
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to enhance your ophthalmology skills with hands-on
                experience!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 3,
    session: 'Afternoon',
    name: 'GI Laporoscopy',
    price: 499,
    description: 'Another slot available on day 2 morning',
    image: '/image/scientific/GI_Laporoscopy.png',
    id: 47,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>GI Laparoscopy Workshop</h1>
          </header>
          <section>
            <p>
              "Master the Art of Minimally Invasive Surgery - Join Our GI
              Laparoscopy Workshop where we learn laparoscopy, endoscopy, and
              laser applications. Join us for an unforgettable learning
              experience and discover the latest advancements in GI
              laparoscopy!"
            </p>
          </section>
          <section>
            <h2>Sub Modules</h2>
            <ul>
              <li>
                <strong>Laparoscopy:</strong> "A small step for a surgeon, a
                giant leap for surgery. Let us get familiar with how a small
                incision and a camera have transformed the landscape of modern
                surgeries in our workshop."
              </li>
              <li>
                <strong>Endoscopy:</strong> "Uncovering the unseen. Endoscopy
                serves as a versatile tool with several vital roles in the realm
                of human health. Let us now understand the investigation
                symptoms and its guiding treatment and intervention."
              </li>
              <li>
                <strong>Laser Applications:</strong> "Learn how this approach
                reduces the need for invasive surgery and promotes faster
                recovery."
              </li>
            </ul>
          </section>
          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 499/-
            </p>
            <p>
              <strong>Number of Slots:</strong> 1
            </p>
            <ul>
              <li>
                <strong>Slot 1:</strong> 21st September 2:00 PM to 4:00 PM
              </li>
            </ul>
          </section>
          <footer>
            <p>
              <strong>
                Join us to master the latest advancements in GI laparoscopy and
                enhance your minimally invasive surgical skills!
              </strong>
            </p>
          </footer>
        </div>
      </>
    ),
  },
  {
    day: 3,
    session: 'Afternoon',
    name: 'Medi Hunt',
    price: 99,
    description: 'Another slot available',
    image: '/image/scientific/Medi_Hunt.png',
    id: 48,
    content: (
      <>
        <div class='workshop-content' className='mt-24'>
          <header className='mt-24 p-10'>
            <h1>SMARC Welcomes you to MEDIHUNT</h1>
          </header>
          <section>
            <p>
              Every clue a chill, Every Step a thrill. Get ready to enter the
              world of HALLOWEEN for spine chill adventure, including more than
              80 interesting clues.Get ready to decode clues and embark on a
              quest to reach the ULTIMATE HIDDEN TREASURE.Clues include tricky
              medical puzzles,riddles,movie and sports .The team that conquers
              the treasure will be REWARDED. NOTE: MOBILE PHONES ARE NOT
              ALLOWED.
            </p>
          </section>

          <section>
            <h2>Workshop Details</h2>
            <p>
              <strong>Price:</strong> 99/-
            </p>
            <p>
              <strong>Number of Slots:</strong> 1
            </p>
            <ul>
              <li>
                <strong>Slot 2:</strong> 21st September 9:00 AM to 1:00 PM
              </li>
            </ul>
          </section>
        </div>
      </>
    ),
  },
];

export const activities = [
  //culturals
  //sit back and relax
  {
    day: 1,
    session: 'Morning',
    id: 1,
    name: 'Flash Mob',
    price: 0,
    description: 'Covered under basic registration fees',
    image: '/image/culturals/Flash_Mob.png',
    check: true,
    disabled: true,
  },
  {
    day: 1,
    session: 'Morning',
    id: 2,
    name: 'Surprise Night',
    price: 0,
    description: 'Covered under basic registration fees',
    image: '/image/culturals/Surprise_Night.png',
    check: true,
    disabled: true,
  },
  {
    day: 1,
    session: 'Morning',
    id: 3,
    name: 'Celebrity Night',
    price: 0,
    description: 'Covered under basic registration fees',
    image: '/image/culturals/Celebrity_Night.png',
    check: true,
    disabled: true,
  },
  {
    day: 2,
    session: 'Morning',
    id: 4,
    name: 'DJ Night',
    price: 0,
    description: 'Covered under basic registration fees',
    image: '/image/culturals/DJ_Night.png',
    check: true,
    disabled: true,
  },
  {
    day: 2,
    session: 'Morning',
    id: 5,
    name: 'Med Fun',
    price: 0,
    description: 'Covered under basic registration fees',
    image: '/image/culturals/Med_Fun.png',
    check: true,
    disabled: true,
  },
  {
    day: 2,
    session: 'Morning',
    id: 6,
    name: 'Fashion Parade',
    price: 0,
    description:
      'Select the following to register for this particular competition',
    image: '/image/culturals/Fashion_Parade.png',
    check: false,
  },
  //compititions in culturals
  {
    day: 2,
    session: 'Morning',
    id: 7,
    name: 'Dance Competition',
    price: 0,
    description:
      'Select the following to register for this particular competition',
    image: '/image/culturals/Dance_Competition.png',
    check: false,
  },
  {
    day: 2,
    session: 'Morning',
    id: 8,
    name: 'Singing Competition',
    price: 0,
    description:
      'Select the following to register for this particular competition',
    image: '/image/culturals/Singing_Competition.png',
    check: false,
  },
  {
    day: 2,
    session: 'Morning',
    id: 9,
    name: 'Photo Contest',
    price: 0,
    description:
      'Select the following to register for this particular competition',
    image: '/image/culturals/Photo_Contest.png',
    check: false,
  },
  {
    day: 2,
    session: 'Morning',
    id: 10,
    name: 'Shortfilm Competition',
    price: 0,
    description:
      'Select the following to register for this particular competition',
    image: '/image/culturals/Shortfilm_Competition.png',
    check: false,
  },
  {
    day: 3,
    session: 'Morning',
    id: 11,
    name: 'Playing an Instrument',
    price: 0,
    description:
      'Select the following to register for this particular competition',
    image: '/image/culturals/Playing_an_Instrument.png',
    check: false,
  },
  {
    day: 3,
    session: 'Morning',
    id: 12,
    name: 'Cooking without Fire',
    price: 99,
    description:
      'Select the following to register for this particular competition',
    image: '/image/culturals/Cooking_without_Fire.png',
    check: false,
  },
  {
    day: 3,
    session: 'Morning',
    id: 13,
    name: 'Beat Box',
    price: 0,
    description:
      'Select the following to register for this particular competition',
    image: '/image/culturals/Beat_Box.png',
    check: false,
  },
  {
    day: 3,
    session: 'Morning',
    id: 14,
    name: 'Arts Competition 1',
    price: 0,
    description:
      'Select the following to register for this particular competition',
    image: '/image/culturals/Arts_Competition.png',
    check: false,
  },
  {
    day: 3,
    session: 'Morning',
    id: 15,
    name: 'Arts Competition 2',
    price: 0,
    description:
      'Select the following to register for this particular competition',
    image: '/image/culturals/Arts_Competition.png',
    check: false,
  },
];
