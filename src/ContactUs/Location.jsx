

const Location = () => {
  return (
    <div>
      <div className="my-14">
            <div className="w-full p-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.418670263348!2d92.15828697619982!3d24.781113448426463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751c92a80920069%3A0x4e750e27ef064252!2sAbdur%20Rahman%E2%80%99s%20residence!5e0!3m2!1sen!2sbd!4v1728540806993!5m2!1sen!2sbd"
                    className="w-full h-64 md:h-96 border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                />
            </div>
        </div>
    </div>
  );
};

export default Location;
