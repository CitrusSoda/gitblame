import { api } from '@/lib/api';
import { FieldApi, useForm } from '@tanstack/react-form';
import { useNavigate } from '@tanstack/react-router';
import CodeMirror from '@uiw/react-codemirror';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.touchedErrors ? (
        <em>{field.state.meta.touchedErrors}</em>
      ) : null}
      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  );
}

export const CodeQuestionForm = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      title: '',
      description: '',
      code: '',
    },
    onSubmit: async ({ value }) => {
      const res = await api['code-question'].$post({ json: value });
      if (!res.ok) {
        throw new Error('Failed to create expense');
      }
      navigate({ to: '/blame' });
    },
  });
  return (
    <div>
      <h1 className="text-2xl font-bold">코드 질문 작성</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div>
          <form.Field
            name="title"
            children={(field) => {
              return (
                <>
                  <Label htmlFor={field.name}>제목</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </>
              );
            }}
          />
        </div>
        <div>
          <form.Field
            name="code"
            children={(field) => {
              return (
                <>
                  <Label htmlFor={field.name}>도움 받을 코드</Label>
                  <CodeMirror
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e)}
                  />
                  <FieldInfo field={field} />
                </>
              );
            }}
          />
        </div>
        <div>
          <form.Field
            name="description"
            children={(field) => {
              return (
                <>
                  <Label htmlFor={field.name}>설명</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </>
              );
            }}
          />
        </div>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button type="submit" disabled={!canSubmit} className="mt-4">
              {isSubmitting ? '...' : 'Submit'}
            </Button>
          )}
        />
      </form>
    </div>
  );
};
