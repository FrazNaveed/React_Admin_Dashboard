import css from './Layout.module.css';
import moment from 'moment/moment';
import { BiSearch } from 'react-icons/bi';

const Layout = () => {
  return (
    <div className={css.container}>
      <div>Sidebar</div>
      <div className={css.dashboard}>
        <div className={css.topBasedGradient}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className={css.header}>
          <span>{moment().format('dddd, Do, MMM YYYY')}</span>
          <div className={css.searchBar}>
            <BiSearch size={20} />
            <input type="text" placeholder="Search" />
          </div>
          <div className={css.profile}>
            <img src="./profile.png" alt="person image" />
            <div className={css.details}>
              <span>Fraz Naveed</span>
              <span>fraz@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;