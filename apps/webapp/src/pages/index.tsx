import { Combobox } from '../components/combobox';
import styles from './index.module.scss';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container mt-10">
          <Combobox renderEmptyState={() => <p>no results</p>} />
        </div>
      </div>
    </div>
  );
}

export default Index;
