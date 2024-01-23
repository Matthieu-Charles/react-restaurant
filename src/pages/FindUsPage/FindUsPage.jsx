function FindUsPage() {
  return (
    <>
      <div className="container d-flex mt-5">
        <div className="col">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2723.396392231845!2d6.125219500000001!3d46.95390129999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478d0ade11030c15%3A0xc1600c037f1feb5d!2sRue%20de%20la%20Sauce%2C%2025270%20Levier!5e0!3m2!1sfr!2sfr!4v1705835221531!5m2!1sfr!2sfr"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col p-4">
          <h1>Nous trouver</h1>
          <p className="pt-2">
            Afin de venir goûter notre cuisine d'exception, rendez-vous est pris
            rue de la sauce, à Levier!
          </p>
          <p>Thynk Restaurant</p>
          <p>3, rue de la sauce</p>
          <p>25270 Levier</p>
        </div>
      </div>
    </>
  );
}

export default FindUsPage;
