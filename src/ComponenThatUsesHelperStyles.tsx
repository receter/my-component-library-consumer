import helperStyles from './helperStyles.module.css';

export function ComponenThatUsesHelperStyles() {
  return (
    <div>
      <h1 className={helperStyles.fontWeightNormal}>I use helperStyles.fontWeightNormal</h1>
    </div>
  )
}