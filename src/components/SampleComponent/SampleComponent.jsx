import React from 'react';
import styles from './SampleComponent.scss';

const SampleComponent = () => (
  <div data-test-hook="SampleComponentPage" className={styles.sampleComponent}>
    <p>
      Hi! Please remove this sample component and replace with the appropriate
      best practice components to match the mocks you were provided with.
      Good Luck!
    </p>
  </div>
);

export default SampleComponent;
