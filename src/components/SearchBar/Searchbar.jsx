import Notiflix from 'notiflix';
import css from './SearchBar.module.css';
import { useState } from 'react';

export const SearchBar = ({ onSubmitHandler }) => {
    const [name, setName] = useState('');
    
    const handleChange = evt =>
        setName(evt.currentTarget.value.toLowerCase());;

    const handleSubmit = evt => {
        evt.preventDefault();
        if (name.trim() === '') {
            Notiflix.Notify.failure('You have to enter something');
            return;
        };
        onSubmitHandler(name);
        setName('');
    };

    return (
        <header className={css.headerSearch}>
            <form className={css.formSearch} onSubmit={handleSubmit}>    
                <input
                    className={css.inputSearch}
                    type="text"
                    autoComplete="off"
                    onChange={handleChange}
                    value={name}
                    autoFocus
                    placeholder='Search image name'
                />    
                <button className={css.btnSearch} type="submit">
                    <span>
                        Search
                    </span>
                </button>
            </form>
        </header>
    )

};


// class SearchBar extends Component {
//     state = {
//         name: '',
//     }

//     handleChange = evt => {
//         const { value } = evt.currentTarget;
//         this.setState({ name: value });

//     };

//     handleSubmit = evt => {
//         evt.preventDefault();
//         if (this.state.name.trim() === '') {
//             Notiflix.Notify.failure('You have to enter something');
//             return;
//         };
//         this.props.onSubmitHandler(this.state.name);
//         this.setState({ name: '' });
//     };

//     render() {
//         return (
//             <header className={css.headerSearch}>
//                 <form className={css.formSearch} onSubmit={ this.handleSubmit }>
                    
//                     <input
//                         className={css.inputSearch}
//                         type="text"
//                         autoComplete="off"
//                         onChange={this.handleChange}
//                         value={this.state.name}
//                         autoFocus
//                         placeholder='Search image name'
//                     />
                    
//                     <button className={css.btnSearch} type="submit">
//                         <span>
//                             Search
//                         </span>
//                     </button>

//                 </form>
//             </header>
//         )
//     }
// }
