import Button from 'components/Button';
import Input from 'components/Input';
import { withAuth } from 'utils/auth';
import FormServices from 'services/FormServices';
import styles from 'styles/Home.module.css';
import Img from 'components/Img';

import figure1 from '../public/assets/Vector1.png';
import figure2 from '../public/assets/Vector2.png';
import figure3 from '../public/assets/Vector3.png';
import { useState } from 'react';

import toast, { Toaster } from 'react-hot-toast';

// ToDo: code this page following Figma design and specifications (https://www.figma.com/file/To3P20ST6fowk2I5kQRCEd/Lila-Frontend-Challenge?node-id=0%3A1&t=Gdm4LTgM1B70TerQ-1).

function Home() {
  const [image, setImage] = useState('');
  const [file, setFile] = useState([]);

  /** Sends form data to backend and shows success/error message. */
  const handleSubmit = async (e) => {
    // Hint: I'll leave this submit handler placeholder here for help.
    e.preventDefault();

    const { ok, data } = await FormServices.save({
      name: image,
      files: file,
    }); // Hint: complete the code inside the save method too.

    if (ok) {
      // ToDo : show success message.
      toast.success(data);
    } else {
      toast.error(data);
      // ToDo : show error message.
    }
  };

  return (
    <main className={styles.container}>
      <Toaster />
      <div className={styles.img_container}>
        <Img
          src={figure1}
          alt="wave"
          className={styles.image1}
          fill={true}
          priority
        />
        <Img src={figure2} alt="figure" className={styles.image2} />
        <Img src={figure3} alt="figure" className={styles.image3} />
      </div>
      <section className={styles.form_container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>¡Subí tus fotos!</h1>
          <Input
            name="name"
            type="input"
            label="Nombre de la Imagen"
            handleChange={(e) => setImage(e.target.value)}
            className={styles.input_name}
            size="large"
          />
          <div className={styles.cont_input_file}>
            <Input
              name="files"
              type="file"
              label="Selecciona una Imagen"
              handleChange={(e) =>
                setFile((prev) => [...prev, e.target.files[0]])
              }
              accept="image/*"
              className={styles.input_file}
              multiple
              hidden={true}
              size="large"
            />
            {file.length > 0 && (
              <>
                {file.map((img) => (
                  <Img
                    width={135}
                    height={135}
                    key={img.name}
                    src={URL.createObjectURL(img)}
                    alt={img.name}
                  />
                ))}
              </>
            )}
          </div>

          <Button
            className={styles.button}
            disabled={Object.values({
              name: image,
              files: file,
            }).some((val) => val === '' || val.length === 0)}
            label="Enviar"
            size="large"
          />
        </form>
      </section>

      {/* Good luck! */}
    </main>
  );
}

// ToDo: use withAuth High Order Component to force authentication for this page.
export default withAuth(Home);
