import React from 'react';
import CharacterDetail from "./index";
import {render, waitForElement, fireEvent} from '../../utils/test-utils';

describe('Tests for Character details component',() => {
    it('Should list character when opening page', async () => {
        // render component
        // verify if page loaded
        const { getByTestId } = render(<CharacterDetail />, {});
        const characterNode = await waitForElement(() => getByTestId('label-title'));
        expect(characterNode).toBeDefined()
    }, 30000);

    it('Should edit character', async () => {
        // render component
        // click edit button
        // type testing at character name
        // verify name changed
        // save changes
        const { getByTestId } = render(<CharacterDetail />, {});
        const btnNode = await waitForElement(() => getByTestId('btn-edit'));
        fireEvent.click(btnNode);
        const fieldNode = await waitForElement(() => getByTestId('form-name'));
        const filterChar = 'testing';
        fireEvent.change(
            fieldNode,
            {target: {value: filterChar}}
        );
        // @ts-ignore
        expect(fieldNode.value).toEqual(filterChar);
        const btnSave = await waitForElement(() => getByTestId('btn-save'));
        fireEvent.click(btnSave);
    }, 30000);
});