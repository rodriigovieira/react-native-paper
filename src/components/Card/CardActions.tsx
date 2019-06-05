

import * as React from 'react';
import { StyleSheet, StyleProp, View } from 'react-native';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheet';

type Props = React.ComponentProps<typeof View> & {
  /**
   * Items inside the `CardActions`.
   */
  children: React.ReactNode,
  style?: StyleProp<ViewStyle>,
};

/**
 * A component to show a list of actions inside a Card.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Button, Card } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Actions>
 *       <Button>Cancel</Button>
 *       <Button>Ok</Button>
 *     </Card.Actions>
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 */
class CardActions extends React.Component<Props> {
  static displayName = 'Card.Actions';

  render() {
    return (
      <View {...this.props} style={[styles.container, this.props.style]}>
        {React.Children.map(
          this.props.children,
          child =>
            React.isValidElement(child)
              ? React.cloneElement(child, {
                  compact: child.props.compact !== false,
                })
              : child
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 8,
  },
});

export default CardActions;
