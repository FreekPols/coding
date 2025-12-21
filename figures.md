# Notes on figures

# horizontal figures

```{note} utilizing grid
```
:::::{grid} 2 
::::{card}
:::{figure} fig1.*
:width: 100%
::::

::::{card}
:::{figure} fig2.*
:width: 80%
::::
:::::

```{note} utilizing grid with css
```
:::::{grid} 2
:class: items-end
::::{grid-item}
:class: flex flex-col justify-end
:::{figure} fig1.*
:label: a_basic_spline
:width: 100%
:alt: A basic spline drawing to represent a parameterized shape.
Parameterized shape, using a spline.
:::
::::

::::{grid-item}
:class: flex flex-col justify-end
:::{figure} fig2.*
:label: stanford_bunny
:width: 60%
:alt: The Stanford Bunny shown as a target curve.
Target shape, the [Stanford Bunny](https://en.wikipedia.org/wiki/Stanford_bunny).
:::
::::
:::::

```{note} Figure with flex
``` 

::::{figure}
:class: flex flex-row items-end gap-4

:::{figure} fig1.*
:label: fig1
:class: m-0 flex flex-col justify-end
Caption A
:::

:::{figure} fig2.*
:label: fig2
:class: m-0 flex flex-col justify-end
Caption B
:::

::::

```{note} Figure with grid and captions
```
some text

::::{figure}
:class: grid grid-cols-2 items-end gap-4
:label: fig_combined
:width: 100%

:::{figure} fig1.*
:width: 50%
:label: fig1x

Caption A
:::

:::{figure} fig2.*
:label: fig2x
:width: 50%

Caption B
:::

caption
::::




::::{figure}
:class: grid grid-cols-2 items-end gap-4
:label: fig_combined2
:width: 100%

![Banff, Canada](https://github.com/rowanc1/pics/blob/main/banff-wide.png)
![Golden Gate Bridge, San Francisco](https://github.com/rowanc1/pics/blob/main/sfo-wide.png)

Some lovely pictures
::::
