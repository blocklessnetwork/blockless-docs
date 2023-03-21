import { FC } from 'react';
import loading from 'assets/icons/loading.gif';
import NextImage from 'next/image'

const Loader: FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <NextImage src={loading} width={150} height={150} alt="blockless loading" />
    </div>
  );
};

export default Loader;
