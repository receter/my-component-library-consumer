import { Label } from '@receter/my-component-library';
import helperStyles from './helperStyles.module.css';

export function ComponentThatUsesLabel() {
  return (
    <div>
      <Label className={helperStyles.fontWeightNormal}>I should not be bold</Label>
    </div>
  )
}