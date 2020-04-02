import React from 'react';
import CharacterList from "./index";
import {fireEvent, render, waitForElement} from '../../utils/test-utils';

describe('Tests for CharacterList component',() => {
    it('Should list characters when opening page', async () => {
        // render component
        // verify if items appeared at the list
        const { getByTestId } = render(<CharacterList />, {});
        const anyCharacterNode = await waitForElement(() => getByTestId('0'));
        expect(anyCharacterNode).toBeDefined()
    }, 30000);

    it('Should list character when searching by name', async () => {
        // render component
        // search for input
        // type char name on input
        // validate typing
        // verify if item appeared at the list
        const { getByTestId, getByText } = render(<CharacterList />, {});
        const fieldNode = await waitForElement(() => getByTestId('form-field'));
        const filterChar = 'Wolverine';
        fireEvent.change(
            fieldNode,
            {target: {value: filterChar}}
        );
        // @ts-ignore
        expect(fieldNode.value).toEqual(filterChar);
        const characterNode = await waitForElement(() => getByText(filterChar));
        expect(characterNode).toBeDefined()
    }, 30000)
});