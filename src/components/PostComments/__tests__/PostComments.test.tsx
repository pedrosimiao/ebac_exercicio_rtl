import { fireEvent, render, screen } from '@testing-library/react';
// import Post from '..';
import PostComments from '../index';

describe("Teste para o componente PostComments", () => {
    test("Deve adicionar dois comentários corretamente", () => {
        render(<PostComments />);

        const commentTextarea = screen.getByTestId("post-comments-textarea");
        const submitButton = screen.getByTestId("post-comments-submit-button");

        fireEvent.change(commentTextarea, {
            target: { value: "1st comment" },
        });
        fireEvent.click(submitButton);
        expect(screen.getByText("1st comment")).toBeInTheDocument();

        fireEvent.change(commentTextarea, {
            target: { value: "2nd comment" },
        });        
        fireEvent.click(submitButton);
        expect(screen.getByText("2nd comment")).toBeInTheDocument();

        expect(screen.getAllByTestId("post-comment")).toHaveLength(2);
    });
});