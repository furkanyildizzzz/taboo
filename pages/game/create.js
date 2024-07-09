import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
    },
  };
}
const NewGame = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({});
  const route = useRouter();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const goToMainMenu = () => {
    route.back();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ formData });
  };

  return (
    <div>
      <div>
        <label>{t('fullname')}</label>
        <input name="fullname" type="text" required onChange={handleChange} />
      </div>
      <hr />
      <b>Oyun Metodu</b>
      <div>
        <label>Round Sayısı</label>
        <input
          name="round"
          type="number"
          defaultValue={2}
          min={1}
          max={5}
          required
          onChange={handleChange}
        />
      </div>

      <hr />

      <div>
        <button type="button" onClick={goToMainMenu}>
          Ana Menü
        </button>
        <button type="submit" onSubmit={handleSubmit}>
          Başlat
        </button>
      </div>
    </div>
  );
};
export default NewGame;
