import styled from 'styled-components';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import CardBody from '../components/CardBody';
import Header from '@/components/Header';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import CardFooter from '@/components/CardFooter';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
    },
  };
}

const DivStyles = styled.div`
  h5 {
    font-family: Oswald, sans-serif;
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    color: rgb(51, 51, 51);
  }
  p {
    font-size: 1.6rem;
    text-align: left;
    padding: 0px 0.5rem;
    margin-bottom: 1rem;
    color: rgb(51, 51, 51);
  }
`;

const HowToPlay = () => {
  const [currentRule, setCurrentRule] = useState(0);

  const route = useRouter();

  const { t } = useTranslation('common');
  const rules = t('rules', { returnObjects: true });

  const handleClickPrev = () => {
    if (currentRule > 0) {
      setCurrentRule((prevRule) => prevRule - 1);
    } else route.push('/');
  };

  const handleClickNext = () => {
    if (currentRule < rules.length - 1) {
      setCurrentRule((prevRule) => prevRule + 1);
    } else route.push('/');
  };

  return (
    <>
      <Header title={'welcome'} />
      <Card>
        <CardHeader>How To Play</CardHeader>
        <CardBody>
          {
            <DivStyles>
              <h5>{rules[currentRule].title}</h5>
              {rules[currentRule].text.map((t, index) => {
                return <p key={index}>{t}</p>;
              })}
            </DivStyles>
          }
        </CardBody>
        <CardFooter>
          <ButtonGroup>
            <Button
              text={currentRule == 0 ? 'Close' : 'Back'}
              buttontype={'regular'}
              onClick={handleClickPrev}
            />
            <Button
              text={currentRule < rules.length - 1 ? 'Next' : 'Close'}
              buttontype={'success'}
              onClick={handleClickNext}
            />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default HowToPlay;
