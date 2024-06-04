import DotsLoadingComponent from '@/components/application/components/DotsLoadingComponent';
import React from 'react';
import renderer, { act } from 'react-test-renderer';

describe('DotsLoadingComponent', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<DotsLoadingComponent colorTheme="light" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('animates dots', () => {
    jest.useFakeTimers();

    const component = renderer.create(<DotsLoadingComponent colorTheme="light" />);
    const dot1 = component.root.findByProps({ testID: 'dot-1' });
    const dot2 = component.root.findByProps({ testID: 'dot-2' });
    const dot3 = component.root.findByProps({ testID: 'dot-3' });

    // Verify that the dots initially have opacity 0
    expect(dot1.props.style.opacity._value).toEqual(0);
    expect(dot2.props.style.opacity._value).toEqual(0);
    expect(dot3.props.style.opacity._value).toEqual(0);

    // Advance timers by 500ms (duration of first animation)
    act(() => {
      jest.advanceTimersByTime(500);
      component.update(<DotsLoadingComponent colorTheme="light" />);
    });
  });
});
