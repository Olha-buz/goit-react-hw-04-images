import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
    return (
        <div className={css.spinner}>
            <Oval
                height={120}
                width={120}
                color="#E5D226"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#1A65BC"
                strokeWidth={12}
                strokeWidthSecondary={12}

            />
             
        </div>
    )
};
