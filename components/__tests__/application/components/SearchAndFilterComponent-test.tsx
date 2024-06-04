import SearchAndFilterComponent from '@/components/application/components/SearchAndFilterComponent';
import React from 'react';
import renderer from 'react-test-renderer';

describe('SearchAndFilterComponent', () => {
  it('renders correctly', () => {
    const setQueryMock = jest.fn();
    const onClickFilterMock = jest.fn();
    const tree = renderer
      .create(
        <SearchAndFilterComponent
          setQuery={setQueryMock}
          query=""
          onClickFilter={onClickFilterMock}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls setQuery when SearchBarComponent changes query', () => {
    const setQueryMock = jest.fn();
    const onClickFilterMock = jest.fn();
    const component = renderer.create(
      <SearchAndFilterComponent
        setQuery={setQueryMock}
        query=""
        onClickFilter={onClickFilterMock}
      />
    );
    const searchBar = component.root.findByProps({ testID: 'search-bar' });

    searchBar.props.setQuery('new query');

    expect(setQueryMock).toHaveBeenCalledWith('new query');
  });

  it('calls onClickFilter when FilterIconContainer is pressed', () => {
    const setQueryMock = jest.fn();
    const onClickFilterMock = jest.fn();
    const component = renderer.create(
      <SearchAndFilterComponent
        setQuery={setQueryMock}
        query=""
        onClickFilter={onClickFilterMock}
      />
    );
    const filterIcon = component.root.findByProps({ testID: 'filter-icon' });

    filterIcon.props.onPress();

    expect(onClickFilterMock).toHaveBeenCalledTimes(1);
  });
});
